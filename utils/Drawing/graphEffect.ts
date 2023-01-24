import { IDestroyable, Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Drawing } from './Drawing';

export function graphEffect<TElement extends HTMLElement>(element: TElement): IDestroyable {
    return Registration.create(
        (
            {
                /* !!! LIB destroyable @@@addSubdestroyable */
            },
        ) => {
            // !!! What about waiting
            // await forTime(1000);
            // !!! await forDocumentReady();
            //  console.log(element.getBoundingClientRect());
            const origin = Vector.fromObject(window, ['pageXOffset', 'pageYOffset'])
                .add(Vector.fromObject(element.getBoundingClientRect(), ['x', 'y']))
                .add(Vector.fromObject(element.getBoundingClientRect(), ['width', 'height']).half());
            let drawing = new Drawing();

            /*
            drawing
                .addPoint(origin)
                .addPoint(origin.add({ x: 5, y: 5 }))
                .addPoint(origin.add({ x: -5, y: 5 }));
            */

            function graph(seedPosition: Vector) {
                drawing.clean();
                for (let x = -100; x < 100; x += 2) {
                    let y =
                        Math.sin(x / 10) * 30 +
                        Math.cos(x / 50 + seedPosition.x / 50) * 30 +
                        Math.sin(x / 10 + seedPosition.y / 50) * 5;

                    y = Math.min(y, 100);
                    y = Math.max(y, -100);

                    drawing.addPoint(origin.add({ x, y }));
                }
            }

            let seedPosition = Vector.zero();
            graph(seedPosition);

            element.addEventListener('mousemove', (event) => {
                // TODO: LIB xyzt: addInPlace

                seedPosition = seedPosition.add(Vector.fromObject(event, ['movementX', 'movementY']));

                graph(seedPosition);
            });
        },
    );
}
