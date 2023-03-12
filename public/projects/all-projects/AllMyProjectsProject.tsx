/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../src/components/Items/Item';
import { Translate } from '../../../src/components/Translate/Translate';
// import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
// import { allMyProjectsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import background from './Pavol_Hejn_modular_gadget_as_a_coloring_book_black_and_white_il_05f61e28-a9e6-41e5-9105-0708c5294006.svg';

/**
 * Presentation of project All my projects
 *
 * @see /public/projects/AllMyProjects/all-projects.en.md
 * @see /public/projects/AllMyProjects/all-projects.cs.md
 * @generated by generate-projects-library
 */
export function AllMyProjectsProject() {
    return (
        <a href="https://pavolhejny.com/documents/projects.html" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">All my projects</Translate>
                    <Translate locale="cs">Všechny mé projekty</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>Discover my portfolio of projects and see my range of experience and expertise.</p>
                    </Translate>
                    <Translate locale="cs">
                        <p>Seznam všech mých projektů na GitHubu.</p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(allMyProjectsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="Multiple PC boxes joined together" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}