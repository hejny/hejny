import { IDestroyable } from 'destroyable';

export function effectToRef<TElement extends HTMLElement>(
    effectCreator: (element: TElement) => IDestroyable,
): (element: TElement | null) => void {
    return (element: TElement | null) => {
        if (element === null) {
            return;
        }

        const effect = effectCreator(element);

        // TODO: Destroy effect
    };
}

/**
 * TODO: Apply destroy
 * TODO: Extract interfaces
 */
