import { Color } from './Color';

/**
 * Creates a random color
 *
 * @collboard-modules-sdk
 */
export function randomColor(): Color {
    return Color.fromHex(
        Math.floor(Math.random(/* <- TODO: [🐉] Probbably use seed random */) * 16777215)
            .toString(16)
            .padStart(6, '0'),
    );
}
