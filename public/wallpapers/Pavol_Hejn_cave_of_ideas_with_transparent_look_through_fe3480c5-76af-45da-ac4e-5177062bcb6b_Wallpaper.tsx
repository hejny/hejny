import Image from 'next/image';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { Color } from '../../src/utils/color/Color';
import { createParalaxEffect } from '../../src/utils/Drawing/createParalaxEffect';
import { createParticlesDrawingEffect } from '../../src/utils/Drawing/createParticlesDrawingEffect';
import { effectToRef } from '../../src/utils/Drawing/effectToRef';
import { joinEffects } from '../../src/utils/Drawing/joinEffects';
import cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_background from './Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_background.png';
import cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_foreground from './Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_foreground.png';

/**
 * Image of cave of ideas with transparent look through
 *
 * @see https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b
 * @not-generated by generate-wallpapers-library
 */
export function CaveOfIdeasWithTransparentLookThrough_fe3480c5_Wallpaper() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '100%',
                gridTemplateRows: '100%',
                overflow: 'hidden' /* <- TODO: Maybe use clip not hidden ACRY */,
            }}
        >
            <div
                style={{
                    // TODO: !! ALL styles to css
                    zIndex: 4,
                    order: 4,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,

                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'end',

                    paddingBottom: 80, // TODO: !!optimize
                    paddingRight: 5,
                }}
            >
                <Link
                    href="/gallery"
                    style={{
                        zIndex: 10,
                        fontSize: 10,
                        textDecoration: 'none',
                        color: '#ccc',
                        textShadow: 'none',
                    }}
                >
                    ⬅ AI
                </Link>
            </div>

            <Image // <- Note: [0]
                // width={1920} <- Note: [1]
                alt="Cave of ideas foreground"
                priority
                quality={85 /* <- Note: [3] */}
                draggable="false"
                placeholder="blur"
                src={cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_foreground}
                style={{
                    zIndex: 3,
                    order: 3,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,

                    aspectRatio: 'unset',
                    width: '100%',
                    height: '100%',

                    objectFit: 'cover',
                    objectPosition: '50% 80%',
                }}
                /*
                ref={effectToRef(
                    createParalaxEffect({
                        distance: 1,
                        reactOn: ['POINTER'],
                    }),
                )}
                */
            />

            <div // <- Note: [0]
                style={{
                    zIndex: 1,
                    order: 1,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,
                }}
                ref={effectToRef(
                    joinEffects(
                        createParalaxEffect({
                            distance: -1, // <- TODO: -1 here is bit ugly - either some new option isInverse OR not distance but ammount,...or some better name?
                            reactOn: ['SCROLL'],
                        }),
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
                    ),
                )}
            >
                <Image
                    // width={1920} <- Note: [1]
                    alt="Cave of ideas background"
                    priority
                    quality={75 /* <- Note: [3] */}
                    draggable="false"
                    placeholder="blur"
                    src={cave_of_ideas_with_transparent_look_through_fe3480c5_76af_45da_ac4e_5177062bcb6b_background}
                    style={{
                        aspectRatio: 'unset',
                        width: '100%',
                        height: '100%',

                        objectFit: 'cover',
                        objectPosition: '50% 80%',
                        backgroundColor: '#444400', // TODO: !! do not blink + bpe format TODO: !! TODOs
                    }}
                />
            </div>
        </div>
    );
}

/**
TODO: !! outpaint for desktop OR upscale to have more details 
 * Note: [0] Foreground <Image> is not wrapped into <div> but background is because ref works on <div> but not <Image>
 * Note+TODO: [1] Is it important to explicitelly set width on the images for the optimization?
 * Note+TODO: [3] Has this any effect on png images; tweaking with quality but nothing changed in page load size
 */
