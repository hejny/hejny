import { Destroyable, IDestroyable } from 'destroyable';
import { forTime } from 'waitasecond';
import { BoundingBox, IVector } from 'xyzt';
import { ISvgPath } from '../svgPath/ISvgPath';
import { stringifySvgPath } from '../svgPath/stringifySvgPath';

const FADE_OUT_DURATION_MS = 1200;
export class Drawing extends Destroyable implements IDestroyable {
    private readonly svgElement: SVGSVGElement;
    private readonly pathElement: SVGPathElement;
    private readonly path: ISvgPath;

    public constructor(start: IVector) {
        super();

        this.path = [{ command: 'M', positions: [start] }];

        this.svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        this.svgElement.appendChild(this.pathElement);
        document.body.appendChild(this.svgElement);

        this.svgElement.style.pointerEvents = 'none';
        this.svgElement.style.position = 'absolute';

        // TODO: To method  setStyle
        this.pathElement.setAttribute('stroke', '#1c3660');
        this.pathElement.setAttribute('stroke-width', '5');
        this.pathElement.setAttribute('fill-opacity', 'null');
        this.pathElement.setAttribute('stroke-opacity', 'null');
        this.pathElement.setAttribute('stroke-linecap', 'round');
        this.pathElement.setAttribute('stroke-linejoin', 'round');
        this.pathElement.setAttribute('fill', 'none');

        // !!!this.resize();
    }

    addPoint(position: IVector) {
        //console.log('addPoint');
        this.path.push({ command: 'L', positions: [position] });

        // !!! Increase boundaries - resize
        this.resize();
        this.redraw();
    }

    private get boundingBox(): BoundingBox {
        // TODO: [0] Cache internally
        const points = this.path.flatMap(({ positions }) => positions);

        if (points.length === 0) {
            return BoundingBox.cube(/* TODO: Better */);
        } else if (points.length === 1) {
            return BoundingBox.cube(/* TODO: Better */);
        } else {
            return BoundingBox.fromPoints(...(points as any));
        }
    }

    resize() {
        //console.log('resize');
        // TODO: !!!  Listen on windowchange / scroll / zoomchange...

        // TODO: [0] Just use this.boundingBox
        const boundingBox = this.boundingBox;

        this.svgElement.style.left = `${boundingBox.topLeft.x}px`;
        this.svgElement.style.top = `${boundingBox.topLeft.y}px`;

        this.svgElement.setAttribute('width', boundingBox.width.toString());
        this.svgElement.setAttribute('height', boundingBox.height.toString());
    }

    redraw() {
        //console.log('redraw');
        this.pathElement.setAttribute('d', stringifySvgPath({ path: this.path, topLeft: this.boundingBox.topLeft }));
    }

    async destroy(): Promise<void> {
        await super.destroy();

        this.svgElement.style.opacity = '1';
        this.svgElement.style.transition = `opacity ${FADE_OUT_DURATION_MS / 1000}s ease-in-out`;
        this.svgElement.style.opacity = '0';

        await forTime(FADE_OUT_DURATION_MS);

        document.body.removeChild(this.svgElement);
    }
}

/**
 * TODO: !!! resize+resize where to call
 * TODO: All private/public
 * TODO: Should be used setAttribute OR setAttributeNS
 */
