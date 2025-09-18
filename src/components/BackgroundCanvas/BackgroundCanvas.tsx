import { Color } from '@promptbook/color';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Vector } from 'xyzt';

interface GradientPoint {
    position: Vector;
    color: Color;
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
}

export function BackgroundCanvas({
    width = window.innerWidth,
    height = window.innerHeight,
    pointCount = 4,
    animationSpeed = 0.002,
    noiseIntensity = 0.15,
    className = '',
}: BackgroundCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef<number>(0);

    // Initialize gradient points with predefined colors similar to the examples
    const gradientPoints = useMemo(() => {
        const colors = [
            Color.fromString('#4A90E2'), // Blue
            Color.fromString('#E94B6A'), // Pink/Red
            Color.fromString('#F5A623'), // Orange
            Color.fromString('#9013FE'), // Purple
            Color.fromString('#00BCD4'), // Cyan
            Color.fromString('#FF9800'), // Amber
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

    // Smooth noise function for elegant texture
    const noise = useCallback(
        (x: number, y: number, time: number): number => {
            const scale1 = 0.005;
            const scale2 = 0.02;
            const scale3 = 0.1;

            const n1 = Math.sin(x * scale1 + time) * Math.cos(y * scale1);
            const n2 = Math.sin(x * scale2 + time * 1.3) * Math.cos(y * scale2 + time * 0.7);
            const n3 = Math.sin(x * scale3 + time * 2) * Math.cos(y * scale3 + time * 1.5);

            return (n1 + n2 * 0.5 + n3 * 0.25) * noiseIntensity;
        },
        [noiseIntensity],
    );

    // Calculate color at a specific pixel
    const calculatePixelColor = useCallback(
        (x: number, y: number, time: number): Color => {
            const pixel = new Vector(x, y);
            let totalWeight = 0;
            let r = 0,
                g = 0,
                b = 0,
                a = 0;

            // Calculate weighted average of all gradient points
            gradientPoints.forEach((point) => {
                const distance = pixel.distance(point.position);
                const weight = Math.exp(-distance / point.influence);

                totalWeight += weight;
                const color = point.color;

                // Color class uses values 0-255, so work directly with those
                r += color.red * weight;
                g += color.green * weight;
                b += color.blue * weight;
                a += color.alpha * weight;
            });

            if (totalWeight > 0) {
                r /= totalWeight;
                g /= totalWeight;
                b /= totalWeight;
                a /= totalWeight;
            }

            // Add noise for texture (scale to color range 0-255)
            const noiseValue = noise(x, y, time) * 20; // Noise intensity
            r = Math.max(0, Math.min(255, r + noiseValue));
            g = Math.max(0, Math.min(255, g + noiseValue));
            b = Math.max(0, Math.min(255, b + noiseValue));

            // Create a hex string and use Color.fromHex
            const hex =
                '#' +
                Math.floor(r).toString(16).padStart(2, '0') +
                Math.floor(g).toString(16).padStart(2, '0') +
                Math.floor(b).toString(16).padStart(2, '0');

            const color = Color.fromHex(hex);
            return a < 1 ? color.withAlpha(a) : color;
        },
        [gradientPoints, noise],
    );

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

                // Apply smooth movement
                const force = toTarget.scale(0.001);
                point.velocity = point.velocity.add(force).scale(0.98);
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

    // Render the gradient with optimized sampling
    const render = useCallback(
        (time: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            // Sample every few pixels for performance, then interpolate
            const sampleRate = 4;

            for (let y = 0; y < height; y += sampleRate) {
                for (let x = 0; x < width; x += sampleRate) {
                    const color = calculatePixelColor(x, y, time);

                    // Fill the sample area
                    for (let dy = 0; dy < sampleRate && y + dy < height; dy++) {
                        for (let dx = 0; dx < sampleRate && x + dx < width; dx++) {
                            const index = ((y + dy) * width + (x + dx)) * 4;
                            data[index] = color.red; // Already 0-255
                            data[index + 1] = color.green; // Already 0-255
                            data[index + 2] = color.blue; // Already 0-255
                            data[index + 3] = Math.floor(color.alpha * 255);
                        }
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
        },
        [width, height, calculatePixelColor],
    );

    // Animation loop
    const animate = useCallback(
        (currentTime: number) => {
            const deltaTime = (currentTime - timeRef.current) * animationSpeed;
            timeRef.current = currentTime;

            updateGradientPoints(deltaTime);
            render(currentTime * 0.001);

            animationFrameRef.current = requestAnimationFrame(animate);
        },
        [updateGradientPoints, render, animationSpeed],
    );

    // Start animation
    useEffect(() => {
        timeRef.current = performance.now();
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [animate]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className={className}
            style={{
                width: '100%',
                height: '100%',
                display: 'block',
            }}
        />
    );
}
