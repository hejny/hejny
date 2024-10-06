import { useEffect, useMemo, useRef } from 'react';
import { Vector } from 'xyzt';
import { Color } from '../../utils/color/Color';
import { randomColor } from '../../utils/color/randomColor';
import styles from './ChaosCanvas.module.css';

interface ChaosCanvasProps {}

export function ChaosCanvas(props: ChaosCanvasProps) {
    const {} = props;

    const worldSize = useMemo(() => new Vector(327, 102), []);
    const tileSize = useMemo(() => new Vector(10, 10), []);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');

        if (ctx === null) {
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const worldCenter = worldSize.scale(1 / 2);

        /*/
        // Random dots:
        const dotsCount = Math.round(size.x * size.y * 5);

        for (let i = 0; i < dotsCount; i++) {
            const position = Vector.zero()
                .map(() => Math.random())
                .multiply(size)
                .map((value) => Math.floor(value));

            ctx.fillStyle = randomColor().toString();
            ctx.fillRect(position.x, position.y, 1, 1);
        }
        /**/

        for (let y = 0; y < worldSize.y; y++) {
            for (let x = 0; x < worldSize.x; x++) {
                let rotation = 45;
                let polygonSides = 4;
                let currentTilePosition = new Vector(x, y);
                let currentTileSize = tileSize;
                let isCurrentSkipped = false;

                let color: Color;

                color = randomColor();
                // color = Math.random() > 0.5 ? Color.fromString('black') : Color.fromString('white');

                /*/
                // Circle:
                const distance = worldCenter.distance(position);
                if (distance < (size.x * Math.random()) / 5) {
                    color = color.grayscale;
                }
                /**/

                /**/
                // Linear Gradient:
                if (worldSize.x * Math.random() < currentTilePosition.x) {
                    // color = color.grayscale;
                    color =
                        (currentTilePosition.x + currentTilePosition.y) % 2
                            ? Color.fromString('black')
                            : Color.fromString('white');
                } else {
                    // position = position.add(Vector.zero().map(() => Math.random() * 2 - 1));
                    // currentTileSize = currentTileSize.scale(Math.floor(Math.random() * 3));
                    // isCurrentSkipped = Math.random() > 0.5;
                }
                /**/

                /**/
                // Linear Gradient:
                if (
                    Math.pow(worldSize.x / 2 - currentTilePosition.x, 2) / Math.pow(worldSize.x, 2) <
                    Math.random() * 0.2
                ) {
                    color = color.transparent;
                }
                /**/

                if (isCurrentSkipped) {
                    continue;
                }

                ctx.fillStyle = color.toString();

                /**/
                // Square tile:
                ctx.fillRect(
                    currentTilePosition.x * tileSize.x,
                    currentTilePosition.y * tileSize.y,
                    currentTileSize.x,
                    currentTileSize.y,
                );
                /**/

                /*/
                // N Polygon:
                ctx.beginPath();
                for (let i = 0; i < polygonSides; i++) {
                    const angle = (i / polygonSides) * Math.PI * 2 + (rotation / 180) * Math.PI;
                    const x = (position.x + 2 / 3) * tileSize.x + Math.cos(angle) * tileSize.x;
                    const y = (position.y + 2 / 3) * tileSize.y + Math.sin(angle) * tileSize.y;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                ctx.fill();
                /**/
            }
        }
    }, [canvasRef, worldSize]);

    return (
        <div className={styles.ChaosCanvas}>
            <canvas
                className={styles.canvas}
                ref={canvasRef}
                width={worldSize.x * tileSize.x}
                height={worldSize.y * tileSize.y}
            />
        </div>
    );
}
