import { Destroyable, IDestroyable } from 'destroyable';
import { IVector } from 'xyzt';

export class Drawing extends Destroyable implements IDestroyable {
    public constructor(private readonly start: IVector) {
        super();
    }
}
