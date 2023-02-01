import { IDestroyable, Registration } from 'destroyable';
import { forTime } from 'waitasecond';
import { Vector } from 'xyzt';
import { Drawing } from './Drawing';

export function drawingEffect<TElement extends HTMLElement>(element: TElement): IDestroyable {
    let drawing: Drawing | null = null;

    element.addEventListener('pointerenter', (event) => {
        if (drawing) {
            return;
        }

        drawing = new Drawing(element).addPoint(Vector.fromObject(event, ['pageX', 'pageY']));
    });

    window.addEventListener('pointermove', (event) => {
        if (!drawing) {
            return;
        }

        drawing.addPoint(Vector.fromObject(event, ['pageX', 'pageY']));
    });

    element.addEventListener('pointerleave', async (event) => {
        // TODO: Add more events like leaving whole document / loose of focus /...

        if (!drawing) {
            return;
        }

        // TODO: Do some nice over+beforeshoot and make it symetric
        await forTime(1);

        // TODO: Make here a propper queue
        if (drawing && !drawing.isDestroyed) {
            /* not await */ drawing.destroy();
            drawing = null;
        }
    });

    return Registration.void(/* TODO: Same as in graph effect */);
}
