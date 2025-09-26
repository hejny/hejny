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
    noiseFrequency?: number;
    className?: string;
    showControls?: boolean;
}

export function BackgroundCanvas({
    width = 1920, // Always use Full HD width
    height = 1080, // Always use Full HD height
    pointCount = 4,
    animationSpeed = 50, // pixels per second
    noiseIntensity = 0.03, // Elegant subtle noise
    noiseScale = 100, // Scale of noise patterns
    noiseFrequency = 0.8, // Frequency of noise animation
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

    // Sophisticated noise generation functions for elegant, organic effects
    const generatePerlinNoise = useCallback(
        (x: number, y: number, time: number): number => {
            // Simplified Perlin noise implementation for performance
            const scaledX = x / noiseScale;
            const scaledY = y / noiseScale;
            const scaledTime = time * noiseFrequency * 0.001;

            // Create multiple octaves for rich noise texture
            let noise = 0;
            let amplitude = 1;
            let frequency = 1;
            let maxValue = 0;

            // Use 3 octaves for elegant detail without being overwhelming
            for (let i = 0; i < 3; i++) {
                noise +=
                    Math.sin(scaledX * frequency + scaledTime) *
                    Math.cos(scaledY * frequency + scaledTime * 0.7) *
                    amplitude;
                maxValue += amplitude;
                amplitude *= 0.6; // Each octave contributes less
                frequency *= 1.8; // Each octave is higher frequency
            }

            return noise / maxValue; // Normalize to [-1, 1]
        },
        [noiseScale, noiseFrequency],
    );

    const generateElegantNoise = useCallback(
        (x: number, y: number, time: number, index: number): number => {
            // Combine multiple noise techniques for sophisticated, elegant result
            const perlin = generatePerlinNoise(x, y, time);

            // Add subtle circular waves based on position and point index
            const centerX = width / 2;
            const centerY = height / 2;
            const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const circularWave = Math.sin(distanceFromCenter * 0.01 + time * 0.002 + index * Math.PI * 0.3) * 0.3;

            // Add gentle spiral motion
            const angle = Math.atan2(y - centerY, x - centerX);
            const spiralWave = Math.sin(angle * 3 + time * 0.001 + index * 0.5) * 0.2;

            // Combine all components with elegant weighting
            return perlin * 0.6 + circularWave * 0.3 + spiralWave * 0.1;
        },
        [generatePerlinNoise, width, height],
    );

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
                colorSpace: 'srgb',
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

            // Draw each gradient point as a radial gradient with sophisticated noise effects
            gradientPoints.forEach((point, index) => {
                // Apply elegant noise to position for organic movement
                const positionNoise = generateElegantNoise(point.position.x, point.position.y, time, index);
                const noiseOffset = positionNoise * noiseIntensity * 20; // Scale for position offset

                const noisyX = point.position.x + Math.cos(time * 0.001 + index) * noiseOffset;
                const noisyY = point.position.y + Math.sin(time * 0.001 + index) * noiseOffset;

                // Apply noise to influence radius for breathing effect
                const influenceNoise = generateElegantNoise(noisyX, noisyY, time * 0.5, index);
                const noisyInfluence = point.influence + influenceNoise * noiseIntensity * 50;

                const gradient = ctx.createRadialGradient(
                    noisyX,
                    noisyY,
                    0,
                    noisyX,
                    noisyY,
                    Math.max(50, noisyInfluence), // Ensure minimum influence
                );

                // Apply sophisticated noise to alpha for elegant pulsing
                const alphaNoise = generateElegantNoise(noisyX, noisyY, time * noiseFrequency, index);
                const baseAlpha = 0.6;
                const alpha = Math.max(0.1, Math.min(0.9, baseAlpha + alphaNoise * noiseIntensity));

                // Create color with noise-modified alpha
                const color = Color.fromString(point.color);

                // Create ultra-smooth gradient with many stops using exponential falloff
                const stops = 12; // More stops for smoother transitions
                for (let i = 0; i <= stops; i++) {
                    const t = i / stops;
                    // Use exponential curve for natural falloff: f(t) = e^(-3*t)
                    const falloff = Math.exp(-3 * t);

                    // Add subtle noise variation to each gradient stop for texture
                    const stopNoise = generatePerlinNoise(noisyX + t * 50, noisyY + t * 50, time + i * 0.1);
                    const stopAlpha = alpha * falloff * (1 + stopNoise * noiseIntensity * 0.3);
                    const clampedAlpha = Math.max(0, Math.min(1, stopAlpha));

                    const colorStop = `rgba(${color.red}, ${color.green}, ${color.blue}, ${clampedAlpha})`;
                    gradient.addColorStop(t, colorStop);
                }

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            // Add highly visible noise texture overlay
            if (noiseIntensity > 0) {
                // Create visible grain texture with higher resolution and intensity
                const grainSize = 2; // Size of each grain pixel
                const grainWidth = Math.ceil(width / grainSize);
                const grainHeight = Math.ceil(height / grainSize);
                const imageData = ctx.createImageData(grainWidth, grainHeight);
                const data = imageData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    const pixelIndex = i / 4;
                    const x = (pixelIndex % imageData.width) * grainSize;
                    const y = Math.floor(pixelIndex / imageData.width) * grainSize;
                    
                    // Generate high-contrast noise for visible grain
                    const noise1 = generateElegantNoise(x, y, time * 0.5, 0);
                    const noise2 = generatePerlinNoise(x * 2, y * 2, time * 0.3);
                    const combinedNoise = (noise1 + noise2) * 0.5;
                    
                    // Create strong, visible grain effect
                    const intensity = combinedNoise * noiseIntensity * 120; // Much higher intensity
                    const grain = Math.max(-80, Math.min(80, intensity));
                    
                    // Apply grain as brightness variation
                    data[i] = 128 + grain;     // Red
                    data[i + 1] = 128 + grain; // Green  
                    data[i + 2] = 128 + grain; // Blue
                    data[i + 3] = Math.abs(grain) * 2; // Higher alpha for visibility
                }
                
                // Draw the noise texture with high visibility
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = imageData.width;
                tempCanvas.height = imageData.height;
                const tempCtx = tempCanvas.getContext('2d');
                if (tempCtx) {
                    tempCtx.putImageData(imageData, 0, 0);
                    
                    // Apply noise with strong visibility
                    ctx.globalAlpha = Math.min(0.8, noiseIntensity * 1.2); // Higher alpha
                    ctx.globalCompositeOperation = 'overlay';
                    ctx.imageSmoothingEnabled = false; // Keep grain sharp
                    ctx.drawImage(tempCanvas, 0, 0, width, height);
                    
                    // Add additional soft noise layer for texture depth
                    ctx.globalAlpha = Math.min(0.6, noiseIntensity * 0.8);
                    ctx.globalCompositeOperation = 'multiply';
                    ctx.drawImage(tempCanvas, 0, 0, width, height);
                    
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = 'source-over';
                }
                
                // Add film grain effect for extra texture
                if (noiseIntensity > 0.3) {
                    ctx.globalAlpha = noiseIntensity * 0.3;
                    ctx.globalCompositeOperation = 'screen';
                    
                    // Create random dots for film grain
                    for (let i = 0; i < width * height * 0.001; i++) {
                        const x = Math.random() * width;
                        const y = Math.random() * height;
                        const brightness = Math.random() * 255;
                        
                        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
                        ctx.fillRect(x, y, 1, 1);
                    }
                    
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = 'source-over';
                }
            }
        },
        [
            width,
            height,
            gradientPoints,
            noiseIntensity,
            noiseScale,
            noiseFrequency,
            generateElegantNoise,
            generatePerlinNoise,
        ],
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
