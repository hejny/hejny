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
    className?: string;
    showControls?: boolean;
}

export function BackgroundCanvas({
    width = window.innerWidth,
    height = window.innerHeight,
    pointCount = 4,
    animationSpeed = 50, // pixels per second
    noiseIntensity = 0.05, // Reduced default noise
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

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Clear canvas
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            // Use globalCompositeOperation for better blending
            ctx.globalCompositeOperation = 'screen';

            // Draw each gradient point as a radial gradient
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
                const colorWithAlpha = `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
                const colorTransparent = `rgba(${color.red}, ${color.green}, ${color.blue}, 0)`;

                gradient.addColorStop(0, colorWithAlpha);
                gradient.addColorStop(0.3, colorWithAlpha.replace(alpha.toString(), (alpha * 0.7).toString()));
                gradient.addColorStop(1, colorTransparent);

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            // Add subtle texture overlay for visual richness
            if (noiseIntensity > 0) {
                ctx.globalAlpha = noiseIntensity * 0.3;
                ctx.fillStyle = `hsl(${(time * 0.01) % 360}, 30%, 50%)`;
                ctx.globalCompositeOperation = 'overlay';
                ctx.fillRect(0, 0, width, height);
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
            }
        },
        [width, height, gradientPoints, noiseIntensity],
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
