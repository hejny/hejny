import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Effect } from './effect';

interface ParalaxEffectOptions {
    distance: number;
}

export function createParalaxEffect<TElement extends HTMLElement>(options: ParalaxEffectOptions): Effect<TElement> {
    const { distance } = options;

    return (element: TElement) => {
        let windowSize: Vector;
        let elementSize: Vector;

        let scrollPosition: Vector = Vector.zero();
        let pointerPosition: Vector = Vector.zero();

        function resize() {
            windowSize = Vector.fromObject(window, ['innerWidth', 'innerHeight']);
            elementSize = Vector.fromObject(element.getBoundingClientRect(), ['width', 'height']);
        }

        window.addEventListener('resize', (event) => {
            resize();
            applyParalax();
        });

        window.addEventListener('scroll', (event) => {
            scrollPosition = new Vector(window.scrollX, window.scrollY);
            applyParalax();
        });

        window.addEventListener('pointermove', async (event) => {
            pointerPosition = Vector.fromObject(event, ['clientX', 'clientY']);
            applyParalax();
        });

        let cursorRelativePosition: Vector = Vector.zero();

        function applyParalax() {
            // console.log(new Vector(0, window.scrollY), windowSize, new Vector(0, window.scrollY).divide(windowSize));

            cursorRelativePosition = pointerPosition
                .add(scrollPosition.scale(10))
                .divide(elementSize)
                .subtract({ x: 0.5, y: 0.5 });

            const offcenter = cursorRelativePosition

                .scale(-10)
                .scale(1 / distance)
                // TODO: LIB xyzt: Vector.extend, Vector.log, Vector.logGraphical, Vector.toStringAuto
                .apply((unlimitedOffcenter) => {
                    // console.log('unlimitedOffcenter', unlimitedOffcenter.toString2D());

                    /*
                    console.log(
                        '%c⚫',
                        spaceTrim(`
                            display: inline-block;
                
                            ${`` /* Note: width and height can not be used in console.log* /}
                            padding-left: 10px;
                            padding-right: 90px;
                            padding-top: 30px;
                            padding-bottom: 70px;

                            background-color: red;
                            border: 2px solid black
                    
                        `)
                            .split('\n')
                            .join(''),
                    );
                    */
                    return unlimitedOffcenter;
                })
                .apply(({ x, y, z }) => ({ x, y: Math.min(0, y), z }));
            //.add(new Vector(0, window.scrollY).divide(windowSize).scale(-50));

            element.style.transform = `translate(${offcenter.x}px,${offcenter.y}px)`;
        }

        resize();
        applyParalax();

        return Registration.void(/* Note: This is OK, because each particle disapears automatically */);
    };
}

/**
 * TODO: !!! React on scroll - MOBILE/TOUCH
 * TODO: [🥟] Have windowSize on one place automatically updated
 */
