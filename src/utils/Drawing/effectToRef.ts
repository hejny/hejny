import { IDestroyable } from 'destroyable';
import { Effect } from './effect';

/**
 * @@@
 */
export function effectToRef<TElement extends HTMLElement>(
    effect: Effect<TElement>,
): (element: TElement | null) => void {
    let effectOnElement: null | IDestroyable;

    return async (element: TElement | null) => {
        if (effectOnElement) {
            await effectOnElement.destroy();
        }

        if (element === null) {
            return;
        }

        effectOnElement = effect(element);
    };
}

/**
 * TODO: Extract interfaces
 */
