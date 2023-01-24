import { createGraphEffect } from './createGraphEffect';
import { drawingEffect } from './drawingEffect';
import { noEffect } from './noEffect';

const circleEffect = createGraphEffect({
    range: {
        min: -Math.PI,
        max: Math.PI,
        step: 0.1,
        /*
        TODO:
        min: -Math.PI,
        max: Math.PI,
        step: Math.PI / 100,
        */
    },
    plot({ t, seed }) {
        const x = Math.cos(t) * 30; //* Math.cos(seed.x / 10);
        const y = Math.sin(t) * 30; //* Math.cos(seed.x / 10);
        return { x, y };
    },
});

export const allMyProjectsEffect = noEffect;
export const birdsCzEffect = circleEffect;
export const collboardEffect = drawingEffect;
export const czechEventsEffect = noEffect;
export const functionBuilderEffect = createGraphEffect({
    range: {
        min: -100,
        max: 100,
        step: 2,
    },
    plot({ t, seed }) {
        const x = t;
        let y = Math.sin(x / 10) * 30 + Math.cos(x / 50 + seed.x / 50) * 30 + Math.sin(x / 10 + seed.y / 50) * 5;

        y = Math.min(y, 100);
        y = Math.max(y, -100);

        return { x, y };
    },
});
export const hEduEffect = noEffect;
export const librariesEffect = noEffect;
export const mapsForGeographyEffect = noEffect;
export const modulesForCollboardEffect = noEffect;
export const townsEffect = noEffect;
export const virtualAndAugmentedRealityEffect = noEffect;
export const yourProjectEffect = noEffect;

/**
 * TODO: In future this should be maybe also generated from the markdown but now it is good enough
 */
