import { Vector } from 'xyzt';
import { CaveOfIdeasWithTransparentLookThrough_fe3480c5_Wallpaper } from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_Wallpaper';
import { Color } from '../../utils/color/Color';
import { createParticlesDrawingEffect } from '../../utils/Drawing/createParticlesDrawingEffect';
import { effectToRef } from '../../utils/Drawing/effectToRef';
import styles from './Cave.module.css';

export function CaveSection() {
    return (
        <div
            className={styles.cave}
            ref={effectToRef(
                createParticlesDrawingEffect({
                    generatePosition(cursorPosition) {
                        const distance = Math.random() * 30;
                        const rotation = Math.random() * Math.PI * 2;
                        return cursorPosition.add(Vector.fromPolar(rotation, distance));
                    },
                    generateSize() {
                        return Math.random() * 5 + 3;
                    },
                    generateColor() {
                        return Color.fromString('#feeac4' /* <- [🎨] */);
                    },
                    generateLivetime() {
                        return Math.random() * 2000 + 100;
                    },
                    generateDistance() {
                        return Math.random() * 100 + 50;
                    },
                }),
            )}
        >
            <CaveOfIdeasWithTransparentLookThrough_fe3480c5_Wallpaper />
        </div>
    );
}
