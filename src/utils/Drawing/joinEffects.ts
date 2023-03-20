import { Registration } from 'destroyable';
import { Effect } from './effect';

/**
 * @@@
 */
export function joinEffects<TElement extends HTMLElement>(...effects: Array<Effect<TElement>>): Effect<TElement> {
    return (element: TElement) => {
        return Registration.join(...effects.map((effect) => effect(element)));
    };
}
