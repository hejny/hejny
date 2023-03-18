import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Effect } from './effect';

interface ParalaxEffectOptions {
    distance: number;
    reactOn: Array<'SCROLL' | 'POINTER'>;
    applyOn: 'ELEMENT' | 'SHADOW';

    debug?: {
        tag: string;
    };
}

export function createParalaxEffect<TElement extends HTMLElement>(options: ParalaxEffectOptions): Effect<TElement> {
    const { distance, reactOn, applyOn, debug } = options;

    return (element: TElement) => {
        let windowSize: Vector;
        let elementSize: Vector;

        let scrollPosition: Vector = Vector.zero();
        let pointerPosition: Vector | null = null;

        function resize() {
            windowSize = Vector.fromObject(window, ['innerWidth', 'innerHeight']);
            elementSize = Vector.fromObject(element.getBoundingClientRect(), ['width', 'height']);
        }

        window.addEventListener('resize', (event) => {
            resize();
            applyParalax();
        });

        if (reactOn.includes('SCROLL')) {
            window.addEventListener('scroll', (event) => {
                scrollPosition = new Vector(window.scrollX, window.scrollY);
                applyParalax();
            });
        }

        if (reactOn.includes('POINTER')) {
            window.addEventListener('pointermove', async (event) => {
                pointerPosition = Vector.fromObject(event, ['clientX', 'clientY']);
                applyParalax();
            });
        }

        let cursorRelativePosition: Vector = Vector.zero();

        function applyParalax() {
            // console.log(new Vector(0, window.scrollY), windowSize, new Vector(0, window.scrollY).divide(windowSize));

            let cursorRelativePosition: Vector;

            if (pointerPosition === null) {
                // Note: When pointer not moved, assume that it is right in the middle
                // TODO: DRY [0]
                cursorRelativePosition = scrollPosition.scale(10 /* <- DRY [0] */).divide(elementSize);
            } else {
                // TODO: DRY [0]
                cursorRelativePosition = pointerPosition
                    .add(scrollPosition.scale(10 /* <- DRY [0] */))
                    .divide(elementSize)
                    .subtract({ x: 0.5, y: 0.5 });
            }

            let offcenter = cursorRelativePosition
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
                });

            //.add(new Vector(0, window.scrollY).divide(windowSize).scale(-50));

            if (debug) {
                console.info(debug.tag, { pointerPosition, scrollPosition, cursorRelativePosition, offcenter });
            }

            if (applyOn === 'ELEMENT') {
                // scale(1.01) translate(...
                element.style.transform = `translate(${offcenter.x}px,${offcenter.y}px)`;
            } else if (applyOn === 'SHADOW') {
                element.style.boxShadow = `#00000077 ${offcenter.x}px ${offcenter.y}px 0px` /* <- TODO: !!! At first take initial box-shadow from css */;
            }
        }

        resize();
        applyParalax();

        return Registration.void(/* [1] */);
    };
}

/**
 * TODO: !!! Make origin for SCROLL actual position of element on page NOT top of the page
 * TODO: !!! Apply scroll initally to avoid blink when scrolling on already initially scrolled page
 * TODO: [1] Propper effect cleanup
 * TODO: [1] LIB destroyable better way how to work with addEventListener/removeEventListener
 * TODO: [🥟] Have windowSize on one place automatically updated
 */
