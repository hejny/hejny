import { CaveOfIdeasInLightbulbWithTransparentLookThrImageXd3273ad0 } from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3';
import { CaveWithPresentationImageXdec31ff2 } from '../../../public/wallpapers/Pavol_Hejn_cave_with_presentation_dec31ff2-3b9d-42b9-b84f-f87d02d6a391';
import { CaveWithPrototypingLaboratoryImageXca9b82b9 } from '../../../public/wallpapers/Pavol_Hejn_cave_with_prototyping_laboratory_ca9b82b9-0ded-44a3-b7ec-344ebb539439';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import styles from './Services.module.css';

export function Services() {
    return (
        <Section id="services" className={styles.services}>
            <h2>How can I help you?</h2>
            <p>
                I specialise in building fully functional prototypes from scratch to proof of concept, staying ahead of
                the latest technologies. Let me guide you through the ever-changing landscape of new, emerging and
                disruptive technologies.
            </p>
            <Items>
                {/* Note: Not using <Shuffle/> here in the services section */}

                <a href="#contact">
                    <Item>
                        <Item.Title>Consulting</Item.Title>
                        <Item.Description>
                            I offer expert advice on various technologies, providing {/*insightful*/} analysis of their
                            benefits and limitations to help you make decisions.
                        </Item.Description>
                        <Item.Image>
                            <CaveOfIdeasInLightbulbWithTransparentLookThrImageXd3273ad0 />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.Title>Speaking</Item.Title>
                        <Item.Description>
                            I provide overviews of various technologies, highlighting their{' '}
                            <span style={{ color: '#11ff11' }}>pros</span> and{' '}
                            <span style={{ color: '#ff0000' }}>cons</span> to ensure a well-rounded understanding.
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPresentationImageXdec31ff2 />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.Title>Prototyping</Item.Title>
                        <Item.Description>
                            I will bring your new project into the reality through effective prototyping and seamless
                            transition from concept to implementation.
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
 * TODO: Make pages internall
 * TODO: Text should be selectable even inside of <a>
 * TODO:  Examples how can I help you
 * TODO: Maybe split every item into separate file component
 * TODO: After scrolling highlighting of the section
 * TODO: Rename to HowCanIHelpYou OR Better
 */
