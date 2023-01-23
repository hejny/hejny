import { Vector } from 'xyzt';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { CaveOfIdeasInLightbulbWithTransparentLookThrImageXd3273ad0 } from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3';
import { CaveWithPresentationImageXdec31ff2 } from '../../public/wallpapers/Pavol_Hejn_cave_with_presentation_dec31ff2-3b9d-42b9-b84f-f87d02d6a391';
import { CaveWithPrototypingLaboratoryImageXca9b82b9 } from '../../public/wallpapers/Pavol_Hejn_cave_with_prototyping_laboratory_ca9b82b9-0ded-44a3-b7ec-344ebb539439';
import { Drawing } from '../../utils/Drawing/Drawing';
import styles from './Services.module.css';

export function Services() {
    return (
        <Section id="services" className={styles.services}>
            <h2>How can I help you?</h2>
            <p>
                I live by the new technologies. I will carry out you through the wilderness of the world of new,
                emerging and disruptive technologies.
            </p>
            <Items>
                {/* Note: Not using <Shuffle/> here in the services section */}

                <a href="#contact">
                    <Item>
                        <Item.Title>Consulting</Item.Title>
                        <Item.Description>
                            I will talk to you about the different technologies and provide the advantages and
                            disadvantages of each one.
                        </Item.Description>
                        <Item.Image>
                            <CaveOfIdeasInLightbulbWithTransparentLookThrImageXd3273ad0 />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.Title>Talk</Item.Title>
                        <Item.Description>
                            {/* TODO: !!! Text should be selectable even inside of <a> */}I am able to present an
                            overview of the different technologies and their benefits and drawbacks.
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPresentationImageXdec31ff2 />
                        </Item.Image>
                    </Item>
                </a>

                <a
                    href="#contact"
                    ref={(element) => {
                        // TODO: To separate util addFoooInteractivity

                        if (element === null) {
                            return;
                        }

                        let drawing: Drawing | null = null;

                        element.addEventListener('mouseenter', (event) => {
                            if (drawing) {
                                return;
                            }

                            drawing = new Drawing(Vector.fromObject(event, ['clientX', 'clientY']));
                        });

                        element.addEventListener('mousemove', (event) => {
                            console.log('mousemove');
                            if (!drawing) {
                                return;
                            }

                            drawing.addPoint(Vector.fromObject(event, ['clientX', 'clientY']));
                        });

                        element.addEventListener('mouseLeave', (event) => {
                            // TODO: Add more events like leaving whole document / loose of focus /...

                            if (!drawing) {
                                return;
                            }

                            drawing.destroy();
                        });
                    }}
                >
                    {/* TODO: !!! Interactivity here should be on project Collboard */}
                    <Item>
                        <Item.Title>Prototyping</Item.Title>
                        <Item.Description>
                            I am best at creating of the functional foundation of the new project; from 0 to 1.
                            {/* By utilizing the latest technologies, I can create a prototype with a fully operational codebase that can be used for constructing a large-scale project or simply to test the viability of an idea. */}
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPrototypingLaboratoryImageXca9b82b9 />
                        </Item.Image>
                    </Item>
                </a>
            </Items>
        </Section>
    );
}

/**
 * TODO: Maybe split every item into separate file component
 * TODO: !!! Smooth scrolling + highlighting of the section
 * TODO: !!! Rename to HowCanIHelpYou OR Better
 */
