import { Effect } from './effect';

export function effectToRef<TElement extends HTMLElement>(effect: Effect<TElement>): (element: TElement | null) => void {
    return (element: TElement | null) => {
        if (element === null) {
            return;
        }

        const effectOnElement = effect(element);

        // TODO: Destroy effect
    };
}

/**
 * TODO: Apply destroy
 * TODO: Extract interfaces
 */
