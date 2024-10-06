import { useEffect, useMemo, useRef } from 'react';
import { Vector } from 'xyzt';
import { Color } from '../../utils/color/Color';
import { randomColor } from '../../utils/color/randomColor';
import { $randomItem } from '../../utils/randomItem';
import styles from './ChaosCanvas.module.css';

interface ChaosCanvasProps {}

export function ChaosCanvas(props: ChaosCanvasProps) {
    const {} = props;

    const imageSize = useMemo(() => new Vector(3277, 1024), []);
    const tileSize = useMemo(() => Vector.square(15), []);
    const worldSize = useMemo(
        () => imageSize.divide(tileSize).map((value) => Math.round(value)),
        [imageSize, tileSize],
    );

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

        const RANDOM_IMAGE_COLORS = [
            Color.fromString('#000000'),
            Color.fromString('#000000'),
            Color.fromString('#000000'),
            Color.fromString('#000000'),
            Color.fromString('#091022'),
            Color.fromString('#ab4e22'),
            Color.fromString('#1e1a26'),
            Color.fromString('#523939'),
            Color.fromString('#70463b'),
            Color.fromString('#6f4741'),
            Color.fromString('#342b33'),
            Color.fromString('#191526'),
            Color.fromString('#372d34'),
        ];
        const PATTERN_IMAGE_COLORS = [Color.fromString('#d29063'), Color.fromString('#EEDF6C')];

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

                color = Color.fromString('#000').transparent;
                // color = $randomItem(...RANDOM_IMAGE_COLORS);
                // color = randomColor();
                // color = Math.random() > 0.5 ? Color.fromString('black') : Color.fromString('white');

                /**/
                // Strong gradient from left :
                if (Math.pow((worldSize.x - currentTilePosition.x) / worldSize.x, 2) > Math.random()) {
                    color = Math.random() > 0.8 ? randomColor() : $randomItem(...RANDOM_IMAGE_COLORS);
                }
                /**/

                /**/
                // Strong gradient from right:
                if (Math.pow(currentTilePosition.x / worldSize.x, 2) > Math.random()) {
                    color =
                        (currentTilePosition.x + currentTilePosition.y) % 2
                            ? PATTERN_IMAGE_COLORS[0]
                            : PATTERN_IMAGE_COLORS[1];
                }
                /**/

                /**/
                // Circle:
                const distance = worldCenter.distance(currentTilePosition);
                if (distance < (worldSize.x * Math.random()) / 2) {
                    color = Color.fromString('#000').transparent;
                }
                /**/

                /*/
                // Linear Gradient from left to right:
                if (worldSize.x * Math.random() < currentTilePosition.x) {
                    // color = color.grayscale;
                    color =
                        (currentTilePosition.x + currentTilePosition.y) % 2
                            ? PATTERN_IMAGE_COLORS[0]
                            : PATTERN_IMAGE_COLORS[1];
                } else {
                    // position = position.add(Vector.zero().map(() => Math.random() * 2 - 1));
                    // currentTileSize = currentTileSize.scale(Math.floor(Math.random() * 3));
                    // isCurrentSkipped = Math.random() > 0.5;
                }
                /**/

                /*/
                // Linear Gradient from center:
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
    }, [canvasRef, worldSize, tileSize]);

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
