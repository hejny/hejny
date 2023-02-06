import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Effect } from './effect';

interface ParalaxEffectOptions {
    // TODO: Depth / amount
}

export function createParalaxEffect<TElement extends HTMLElement>(options: ParalaxEffectOptions): Effect<TElement> {
    const {} = options;

    return (element: TElement) => {
        const elementSize = Vector.fromObject(element.getBoundingClientRect(), ['width', 'height']);

        window.addEventListener('pointermove', async (event) => {
            const cursorAbsolutePosition = Vector.fromObject(event, ['clientX', 'clientY']);
            const cursorRelativePosition = cursorAbsolutePosition.divide(elementSize).subtract({ x: 0.5, y: 0.5 });
            const offcenter = cursorRelativePosition.scale(-15);
            element.style.transform = `translate(${offcenter.x}px,${offcenter.y}px)`;
        });

        return Registration.void(/* Note: This is OK, because each particle disapears automatically */);
    };
}

/**
 * TODO: !!! React on scroll - MOBILE/TOUCH
 */
