import { Color } from '@promptbook/color';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Vector } from 'xyzt';
import styles from './BackgroundCanvas.module.css';

interface GradientPoint {
    position: Vector;
    color: string; // Use hex string instead of Color object for performance
    velocity: Vector;
    target: Vector;
    influence: number;
}

interface BackgroundCanvasProps {
    width?: number;
    height?: number;
    pointCount?: number;
    animationSpeed?: number;
    noiseIntensity?: number;
    noiseScale?: number;
    noiseSpeed?: number;
    noiseType?: 'grain' | 'perlin' | 'film';
    className?: string;
    showControls?: boolean;
}

export function BackgroundCanvas({
    width = 1920, // Always use Full HD width
    height = 1080, // Always use Full HD height
    pointCount = 4,
    animationSpeed = 50, // pixels per second
    noiseIntensity = 0.15, // Subtle but visible noise
    noiseScale = 2.0, // Scale of noise pattern
    noiseSpeed = 0.5, // Speed of noise animation
    noiseType = 'grain', // Type of noise effect
    className = '',
    showControls = true,
}: BackgroundCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef<number>(0);
    const frameCountRef = useRef(0);
    const lastFpsReportTimeRef = useRef(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPanelVisible, setIsPanelVisible] = useState(true);

    // Noise generation functions
    const generateGrainNoise = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const animatedTime = time * noiseSpeed * 0.001;

        // Create grain-like noise pattern
        for (let i = 0; i < data.length; i += 4) {
            const pixelIndex = i / 4;
            const x = pixelIndex % width;
            const y = Math.floor(pixelIndex / width);
            
            // Generate noise value with multiple octaves for more natural look
            const noise1 = (Math.sin(x * 0.1 * noiseScale + animatedTime) * Math.cos(y * 0.1 * noiseScale + animatedTime) + 1) / 2;
            const noise2 = (Math.sin(x * 0.02 * noiseScale - animatedTime * 0.7) * Math.cos(y * 0.02 * noiseScale - animatedTime * 0.7) + 1) / 2;
            const noise3 = Math.random() * 0.3; // Random component for grain texture
            
            const combinedNoise = (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2) * noiseIntensity;
            
            // Apply noise as grayscale modulation
            const noiseValue = Math.floor(combinedNoise * 255);
            data[i] = noiseValue;     // Red
            data[i + 1] = noiseValue; // Green
            data[i + 2] = noiseValue; // Blue
            data[i + 3] = Math.floor(combinedNoise * 60); // Alpha for subtlety
        }

        return imageData;
    }, [width, height, noiseScale, noiseSpeed, noiseIntensity]);

    const generatePerlinNoise = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const animatedTime = time * noiseSpeed * 0.001;

        // Simplified Perlin-like noise using multiple sine waves
        for (let i = 0; i < data.length; i += 4) {
            const pixelIndex = i / 4;
            const x = pixelIndex % width;
            const y = Math.floor(pixelIndex / width);
            
            // Create smooth Perlin-like noise with multiple frequencies
            const scale1 = noiseScale * 0.005;
            const scale2 = noiseScale * 0.01;
            const scale3 = noiseScale * 0.02;
            
            const noise1 = Math.sin(x * scale1 + animatedTime) * Math.cos(y * scale1 + animatedTime);
            const noise2 = Math.sin(x * scale2 - animatedTime * 0.6) * Math.cos(y * scale2 - animatedTime * 0.6) * 0.5;
            const noise3 = Math.sin(x * scale3 + animatedTime * 0.8) * Math.cos(y * scale3 + animatedTime * 0.8) * 0.25;
            
            const combinedNoise = ((noise1 + noise2 + noise3) + 1.75) / 3.5 * noiseIntensity;
            
            // Smooth gradients for Perlin effect
            const noiseValue = Math.floor(combinedNoise * 200);
            data[i] = noiseValue;
            data[i + 1] = noiseValue;
            data[i + 2] = noiseValue;
            data[i + 3] = Math.floor(combinedNoise * 40);
        }

        return imageData;
    }, [width, height, noiseScale, noiseSpeed, noiseIntensity]);

    const generateFilmNoise = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const animatedTime = time * noiseSpeed * 0.001;

        // Film grain with vertical streaks and random dust particles
        for (let i = 0; i < data.length; i += 4) {
            const pixelIndex = i / 4;
            const x = pixelIndex % width;
            const y = Math.floor(pixelIndex / width);
            
            // Vertical film streaks
            const streakNoise = Math.sin(x * 0.05 * noiseScale + animatedTime) * 0.3;
            
            // Random dust and scratches
            const dustNoise = (Math.random() - 0.5) * 0.4;
            
            // Subtle horizontal lines (film scanlines)
            const scanlineNoise = Math.sin(y * 0.1 * noiseScale) * 0.1;
            
            const combinedNoise = (streakNoise + dustNoise + scanlineNoise + 1) / 2 * noiseIntensity;
            
            // Warmer tone for film effect
            const baseValue = Math.floor(combinedNoise * 180);
            data[i] = baseValue + 20;     // Slightly more red
            data[i + 1] = baseValue + 10; // Slightly more green
            data[i + 2] = baseValue;      // Base blue
            data[i + 3] = Math.floor(combinedNoise * 50);
        }

        return imageData;
    }, [width, height, noiseScale, noiseSpeed, noiseIntensity]);

    // Initialize gradient points with predefined colors
    const gradientPoints = useMemo(() => {
        const colors = [
            '#4A90E2', // Blue
            '#E94B6A', // Pink/Red
            '#F5A623', // Orange
            '#9013FE', // Purple
            '#00BCD4', // Cyan
            '#FF9800', // Amber
        ];

        return Array.from({ length: pointCount }, (_, index) => {
            const position = new Vector(Math.random() * width, Math.random() * height);

            return {
                position,
                color: colors[index % colors.length],
                velocity: new Vector((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5),
                target: new Vector(Math.random() * width, Math.random() * height),
                influence: 200 + Math.random() * 300,
            } as GradientPoint;
        });
    }, [pointCount, width, height]);

    // Update gradient points animation
    const updateGradientPoints = useCallback(
        (deltaTime: number) => {
            gradientPoints.forEach((point) => {
                // Move towards target with some inertia
                const toTarget = point.target.subtract(point.position);
                const distance = toTarget.magnitude;

                if (distance < 50) {
                    // Generate new random target
                    point.target = new Vector(Math.random() * width, Math.random() * height);
                }

                // Apply smooth movement with normalized force
                const force =
                    toTarget.magnitude > 0 && toTarget.normalized ? toTarget.normalized.scale(0.1) : new Vector(0, 0); // Use normalized direction with consistent force, fallback to zero vector
                point.velocity = point.velocity.add(force).scale(0.98);
                // deltaTime is already scaled by animationSpeed (pixels per second)
                point.position = point.position.add(point.velocity.scale(deltaTime));

                // Wrap around screen edges
                if (point.position.x < -100) point.position = new Vector(width + 100, point.position.y);
                if (point.position.x > width + 100) point.position = new Vector(-100, point.position.y);
                if (point.position.y < -100) point.position = new Vector(point.position.x, height + 100);
                if (point.position.y > height + 100) point.position = new Vector(point.position.x, -100);
            });
        },
        [gradientPoints, width, height],
    );

    // Optimized render using canvas gradients instead of per-pixel calculation
    const render = useCallback(
        (time: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d', { 
                alpha: true,
                desynchronized: false,
                colorSpace: 'srgb'
            });
            if (!ctx) return;

            // Set device pixel ratio for high-DPI displays
            const devicePixelRatio = window.devicePixelRatio || 1;
            
            // Enable maximum quality anti-aliasing and smoothing
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            // Apply slight blur for ultra-smooth edges
            ctx.filter = 'blur(0.5px)';
            
            // Clear canvas with perfect black
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);
            
            // Reset filter for gradient rendering
            ctx.filter = 'none';

            // Use globalCompositeOperation for better blending
            ctx.globalCompositeOperation = 'screen';

            // Draw each gradient point as a radial gradient with ultra-smooth transitions
            gradientPoints.forEach((point, index) => {
                const gradient = ctx.createRadialGradient(
                    point.position.x,
                    point.position.y,
                    0,
                    point.position.x,
                    point.position.y,
                    point.influence,
                );

                // Add subtle noise effect using time-based alpha variation
                const noiseOffset = Math.sin(time * 0.001 + index * 2.1) * noiseIntensity;
                const alpha = Math.max(0.1, 0.6 + noiseOffset);

                // Create color with alpha
                const color = Color.fromString(point.color);

                // Create ultra-smooth gradient with many stops using exponential falloff
                const stops = 10;
                for (let i = 0; i <= stops; i++) {
                    const t = i / stops;
                    // Use exponential curve for natural falloff: f(t) = e^(-3*t)
                    const falloff = Math.exp(-3 * t);
                    const currentAlpha = alpha * falloff;
                    const colorStop = `rgba(${color.red}, ${color.green}, ${color.blue}, ${currentAlpha})`;
                    gradient.addColorStop(t, colorStop);
                }

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            // Add sophisticated noise overlay
            if (noiseIntensity > 0) {
                let noiseImageData: ImageData;
                
                // Generate noise based on selected type
                switch (noiseType) {
                    case 'perlin':
                        noiseImageData = generatePerlinNoise(ctx, time);
                        break;
                    case 'film':
                        noiseImageData = generateFilmNoise(ctx, time);
                        break;
                    case 'grain':
                    default:
                        noiseImageData = generateGrainNoise(ctx, time);
                        break;
                }

                // Apply noise with elegant blending
                ctx.globalCompositeOperation = 'screen';
                ctx.globalAlpha = 0.8;
                ctx.putImageData(noiseImageData, 0, 0);
                
                // Add subtle color variation
                ctx.globalCompositeOperation = 'overlay';
                ctx.globalAlpha = noiseIntensity * 0.2;
                ctx.fillStyle = `hsl(${(time * 0.005) % 360}, 20%, 60%)`;
                ctx.fillRect(0, 0, width, height);
                
                // Reset for next frame
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
            }
        },
        [width, height, gradientPoints, noiseIntensity, noiseType, generateGrainNoise, generatePerlinNoise, generateFilmNoise],
    );

    // Optimized animation loop with frame skipping for consistent performance
    const animate = useCallback(
        (currentTime: number) => {
            const deltaTime = currentTime - timeRef.current;

            // Skip frames if we're running too slow (target: 60fps = ~16.67ms per frame)
            if (deltaTime < 16 && frameCountRef.current > 0) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }

            if (isPlaying) {
                // Convert deltaTime from milliseconds to seconds for pixels per second calculation
                const deltaTimeInSeconds = deltaTime / 1000;
                const scaledDeltaTime = deltaTimeInSeconds * animationSpeed;
                timeRef.current = currentTime;

                updateGradientPoints(scaledDeltaTime);
                render(currentTime);

                frameCountRef.current++;
                if (currentTime > lastFpsReportTimeRef.current + 1000) {
                    console.log(`FPS: ${frameCountRef.current}`);
                    frameCountRef.current = 0;
                    lastFpsReportTimeRef.current = currentTime;
                }
            }
            // Don't update timeRef.current when paused to prevent animation jumping

            animationFrameRef.current = requestAnimationFrame(animate);
        },
        [updateGradientPoints, render, animationSpeed, isPlaying],
    );

    // Initial render and animation setup
    useEffect(() => {
        timeRef.current = performance.now();
        lastFpsReportTimeRef.current = timeRef.current;

        // Render initial frame
        render(0);

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [animate, render]);

    const toggleAnimation = useCallback(() => {
        setIsPlaying((prev) => {
            // When resuming animation, reset the time reference to prevent jumping
            if (!prev) {
                timeRef.current = performance.now();
            }
            return !prev;
        });
    }, []);

    const hideControlPanel = useCallback(() => {
        setIsPanelVisible(false);
    }, []);

    const downloadCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        try {
            // Convert canvas to PNG data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `background-canvas-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.png`;

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Failed to download canvas:', error);
        }
    }, []);

    return (
        <div className={styles.backgroundCanvasContainer}>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className={`${styles.backgroundCanvas} ${className}`}
            />
            {showControls && isPanelVisible && (
                <div className={styles.controlPanel}>
                    <button
                        onClick={toggleAnimation}
                        className={styles.playPauseButton}
                        title={isPlaying ? 'Pause animation' : 'Play animation'}
                    >
                        {isPlaying ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                    <button onClick={downloadCanvas} className={styles.downloadButton} title="Download canvas as PNG">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                    </button>
                    <button onClick={hideControlPanel} className={styles.hideButton} title="Hide control panel">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
