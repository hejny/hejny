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
    noiseFrequency?: number; // 0 = no pixels affected, 1 = all pixels affected
    noiseIntensity?: number; // 0 = no change, 1 = up to negative value
    colors?: string[];
    className?: string;
    showControls?: boolean;
    isPlaying?: boolean;
    onPlayingChange?: (isPlaying: boolean) => void;
}

export function BackgroundCanvas({
    width = 1920, // Always use Full HD width
    height = 1080, // Always use Full HD height
    pointCount = 4,
    animationSpeed = 50, // pixels per second
    noiseFrequency = 0.1, // 0 = no pixels affected, 1 = all pixels affected
    noiseIntensity = 0.2, // 0 = no change, 1 = up to negative value
    colors,
    className = '',
    showControls = true,
    isPlaying: externalIsPlaying,
    onPlayingChange,
}: BackgroundCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef<number>(0);
    const frameCountRef = useRef(0);
    const lastFpsReportTimeRef = useRef(0);
    const [isPlaying, setIsPlaying] = useState(externalIsPlaying ?? false);
    const [isPanelVisible, setIsPanelVisible] = useState(true);

    // Sync external isPlaying state with internal state
    useEffect(() => {
        if (externalIsPlaying !== undefined) {
            setIsPlaying(externalIsPlaying);
        }
    }, [externalIsPlaying]);


    // Initialize gradient points with predefined or custom colors
    const gradientPoints = useMemo(() => {
        const defaultColors = [
            '#4A90E2', // Blue
            '#E94B6A', // Pink/Red
            '#F5A623', // Orange
            '#9013FE', // Purple
            '#00BCD4', // Cyan
            '#FF9800', // Amber
        ];

        const colorsToUse = colors || defaultColors;

        return Array.from({ length: pointCount }, (_, index) => {
            const position = new Vector(Math.random() * width, Math.random() * height);

            return {
                position,
                color: colorsToUse[index % colorsToUse.length],
                velocity: new Vector((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5),
                target: new Vector(Math.random() * width, Math.random() * height),
                influence: 200 + Math.random() * 300,
            } as GradientPoint;
        });
    }, [pointCount, width, height, colors]);

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

    // Simple render with basic gradients and pixel-level noise
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

            // Clear canvas with perfect black
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            // Use globalCompositeOperation for better blending
            ctx.globalCompositeOperation = 'screen';

            // Draw each gradient point as a simple radial gradient
            gradientPoints.forEach((point) => {
                const gradient = ctx.createRadialGradient(
                    point.position.x,
                    point.position.y,
                    0,
                    point.position.x,
                    point.position.y,
                    point.influence,
                );

                const color = Color.fromString(point.color);
                gradient.addColorStop(0, `rgba(${color.red}, ${color.green}, ${color.blue}, 0.6)`);
                gradient.addColorStop(1, `rgba(${color.red}, ${color.green}, ${color.blue}, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            });

            // Reset composite operation before applying noise (final layer)
            ctx.globalCompositeOperation = 'source-over';

            // Apply noise as the final layer on top of all gradients
            if (noiseFrequency > 0 && noiseIntensity > 0) {
                const imageData = ctx.getImageData(0, 0, width, height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    // Check if this pixel should be affected (frequency control)
                    if (Math.random() < noiseFrequency) {
                        // Get original pixel values
                        const originalR = data[i];
                        const originalG = data[i + 1];
                        const originalB = data[i + 2];

                        // Apply noise intensity - random bit changes
                        // Intensity of 1 means up to full range change (can go negative/wrap around)
                        const maxChange = Math.floor(255 * noiseIntensity);
                        const changeR = (Math.random() - 0.5) * 2 * maxChange;
                        const changeG = (Math.random() - 0.5) * 2 * maxChange;
                        const changeB = (Math.random() - 0.5) * 2 * maxChange;

                        // Apply changes with wrapping (like bit manipulation)
                        data[i] = (originalR + changeR) & 0xFF;
                        data[i + 1] = (originalG + changeG) & 0xFF;
                        data[i + 2] = (originalB + changeB) & 0xFF;
                        // Keep alpha unchanged
                    }
                }

                // Put the modified image data back - this is the final rendering step
                ctx.putImageData(imageData, 0, 0);
            }
        },
        [width, height, gradientPoints, noiseFrequency, noiseIntensity],
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
