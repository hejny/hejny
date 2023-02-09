import { Registration } from 'destroyable';
import { Vector } from 'xyzt';
import { Effect } from './effect';

interface ParalaxEffectOptions {
    distance: number;

    /**
     * Do not move further bottom than 0
     * This constrain the movement only up
     */
    isTopLimited: boolean;
    reactOn: Array<'SCROLL' | 'POINTER'>;

    debug?: {
        tag: string;
    };
}

export function createParalaxEffect<TElement extends HTMLElement>(options: ParalaxEffectOptions): Effect<TElement> {
    const { distance, reactOn, isTopLimited, debug } = options;

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

            cursorRelativePosition =
                pointerPosition === null
                    ? new Vector(0.5, 0.5) /* <- Note: When pointer not moved, assume that it is right in the middle */
                    : pointerPosition.add(scrollPosition.scale(10)).divide(elementSize).subtract({ x: 0.5, y: 0.5 });

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

            if (isTopLimited) {
                // TODO: LIB xyzt: Vector.applyInPlace
                offcenter = offcenter.apply(({ x, y, z }) => ({ x, y: Math.min(0, y), z }));
            }

            if (debug) {
                console.info(debug.tag, { pointerPosition, scrollPosition, cursorRelativePosition, offcenter });
            }

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
