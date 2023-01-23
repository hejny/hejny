import { Destroyable, IDestroyable } from 'destroyable';
import spaceTrim from 'spacetrim';
import { forTime } from 'waitasecond';
import { BoundingBox, IVector, Vector } from 'xyzt';
import { ISvgPath } from '../svgPath/ISvgPath';
import { stringifySvgPath } from '../svgPath/stringifySvgPath';

// TODO: Use Collboard appereance
const FADE_OUT_DURATION_MS = 1200 * 1000;
export class Drawing extends Destroyable implements IDestroyable {
    private readonly svgElement: SVGSVGElement;
    private readonly pathElement: SVGPathElement;
    private readonly path: ISvgPath;

    public constructor(start: IVector) {
        super();

        this.path = [{ command: 'M', positions: [start] }];

        this.svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const defsElement = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        this.svgElement.appendChild(defsElement);
        this.svgElement.appendChild(this.pathElement);
        document.body.appendChild(this.svgElement);

        this.svgElement.style.pointerEvents = 'none';
        this.svgElement.style.position = 'absolute';

        // TODO: To method  setStyle
        this.pathElement.style.stroke = '#ff9912';
        this.pathElement.style.strokeWidth = '5px';
        this.pathElement.style.fill = 'none';
        // Redundant> this.pathElement.style.fillOpacity = '1';
        // Redundant> this.pathElement.style.strokeOpacity = '0';
        this.pathElement.style.strokeLinecap = 'round';
        this.pathElement.style.strokeLinejoin = 'round';
        this.pathElement.style.filter = `url(#glow)`;

        // TODO: To method  setStyle
        defsElement.innerHTML = spaceTrim(`
            <filter id="glow">
                <fegaussianblur class="blur" result="coloredBlur" stddeviation="4"></fegaussianblur>
                <femerge>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="SourceGraphic"></femergenode>
                </femerge>
            </filter>
        `);

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
            const boundingBox = BoundingBox.fromPoints(...(points as any));
            // TODO: LIB xyzt inPlaceMethods, BoundingBox.apply,BoundingBox.addMargin
            boundingBox.transform.scale = boundingBox.transform.scale.add(
                Vector.square(parseInt(this.pathElement.style.strokeWidth, 10) * 3.5 /* <- Because of blur */),
            );
            return boundingBox;
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
