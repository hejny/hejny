import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Color } from '../color/Color';
import { Drawing } from './Drawing';
import { Effect } from './effect';
import { Particle } from './Particle';

interface ParticlesDrawingEffectOptions {
    /**
     * Generate (random) position of the particle based on position of cursor
     */
    generatePosition(cursorPosition: Vector): Vector;

    /**
     * Generate (random) size of the particle
     */
    generateSize(): number;

    /**
     * Generate (random) color of the particle
     */
    generateColor(): Color;

    /**
     * Generate (random) livetime of the particle in miliseconds
     */
    generateLivetime(): number;

    /**
     * Generate distance of one particle from another
     * This will be called each time after the previous particle created
     */
    generateDistance(): number;
}

export function createParticlesDrawingEffect<TElement extends HTMLElement>(
    options: ParticlesDrawingEffectOptions,
): Effect<TElement> {
    const { generatePosition, generateSize, generateColor, generateLivetime, generateDistance } = options;

    return (element: TElement) => {
        let drawing: Drawing | null = null;

        element.addEventListener('pointerenter', (event) => {
            if (drawing) {
                return;
            }

            drawing = new Drawing(element).addPoint(Vector.fromObject(event, ['pageX', 'pageY']));
        });

        let requiredDistance: number = 0;
        let lastCursorPosition: Vector = Vector.zero();

        window.addEventListener('pointermove', async (event) => {
            const cursorPosition = Vector.fromObject(event, ['pageX', 'pageY']);

            requiredDistance -= lastCursorPosition.distance(cursorPosition);

            if (requiredDistance > 0) {
                return;
            }

            lastCursorPosition = cursorPosition;
            requiredDistance = generateDistance();

            const particle = new Particle({
                place: element,
                position: generatePosition(cursorPosition),
                size: generateSize(),
                color: generateColor(),
            });

            console.log(particle);

            const livetime = generateLivetime();

            await particle.fadeOut(livetime);
        });

        return Registration.void(/* Note: This is OK, because each particle disapears automatically */);
    };
}
