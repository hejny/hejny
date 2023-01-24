import { Destroyable, Registration } from 'destroyable';
import { IVector, Vector } from 'xyzt';
import { Drawing } from './Drawing';

export function createGraphEffect<TElement extends HTMLElement>(formula: {
    range: { min: number; max: number; step: number };
    plot(input: { t: number; seed: Vector }): IVector;
}): (element: TElement) => Destroyable {
    return (element: TElement) => {
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

                function graph(seed: Vector) {
                    drawing.clean();

                    for (let t = formula.range.min; t <= formula.range.max; t += formula.range.step) {
                        drawing.addPoint(origin.add(formula.plot({ t, seed })));
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
    };
}
