import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import {
    CaveOfIdeasInLightbulbWithTransparentLookThrImage,
    CaveWithPresentationImage,
    CaveWithPrototypingLaboratoryImage,
} from '../../public/wallpapers';
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
                            <CaveOfIdeasInLightbulbWithTransparentLookThrImage />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.Title>Talk</Item.Title>
                        <Item.Description>
                            I am able to present an overview of the different technologies and their benefits and
                            drawbacks.
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPresentationImage />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.Title>Prototyping</Item.Title>
                        <Item.Description>
                            I am best at creating of the functional foundation of the new project; from 0 to 1.
                            {/* By utilizing the latest technologies, I can create a prototype with a fully operational codebase that can be used for constructing a large-scale project or simply to test the viability of an idea. */}
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPrototypingLaboratoryImage />
                        </Item.Image>
                    </Item>
                </a>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Smooth scrolling + highlighting of the section
 * TODO: !!! Rename to HowCanIHelpYou OR Better
 */
