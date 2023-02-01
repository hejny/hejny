/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Item } from '../../../src/components/Items/Item';
import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
import { mapsEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import background from './europe.svg';

/**
 * Presentation of project Maps
 *
 * @see /public/projects/projects.md
 * @generated by generate-projects-library
 */
export function MapsProject() {
    return (
        <a href="https://github.com/collboard/map" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>Maps</Item.Title>
                <Item.Description>
                    <p>
                        The Geography Learning Module for Collboard was developed in collaboration with the capital city
                        of Prague, offering a unique tool for geography teachers. Experience a fresh and interactive way
                        to teach geography with the help of Collboard innovative platform.
                    </p>
                </Item.Description>
                <Item.Image>
                    <div
                        ref={effectToRef(mapsEffect)}
                        style={{
                            backgroundImage: `url(${background.src})`,
                        }}
                    />
                    {/* <Image alt="Globe" src={background} draggable="false" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}