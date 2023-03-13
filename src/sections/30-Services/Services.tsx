import { useTranslation } from 'react-i18next';
import { CaveOfIdeasInLightbulbWithTransparentLookThrD3273ad0097f4011B7991c379bb05ee3_cropped_Image } from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3_cropped_Image';
import { CaveWithPresentationDec31ff23b9d42b9B84fF87d02d6a391_cropped_Image } from '../../../public/wallpapers/Pavol_Hejn_cave_with_presentation_dec31ff2-3b9d-42b9-b84f-f87d02d6a391_cropped_Image';
import { CaveWithPrototypingLaboratoryCa9b82b90ded44a3B7ec344ebb539439_cropped_Image } from '../../../public/wallpapers/Pavol_Hejn_cave_with_prototyping_laboratory_ca9b82b9-0ded-44a3-b7ec-344ebb539439_cropped_Image';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import styles from './Services.module.css';

export function ServicesSection() {
    const { t } = useTranslation('services');
    // !!! i18n

    return (
        <Section id="services" className={styles.services}>
            <h2>{t('title')}</h2>
            <p>
                I specialise in building <b>fully functional prototypes</b> from scratch to proof of concept, staying
                ahead of the latest technologies. Let me guide you through the ever-changing landscape of new, emerging
                and disruptive technologies.
            </p>
            <Items>
                {/* Note: Not using <Shuffle/> here in the services section */}

                <a href="#contact">
                    <Item>
                        <Item.FloatingTitle>Consult</Item.FloatingTitle>
                        <Item.Description>
                            I offer expert advice on various technologies, providing {/*insightful*/} analysis of their
                            benefits and limitations to help you make decisions.
                        </Item.Description>
                        <Item.Image>
                            <CaveOfIdeasInLightbulbWithTransparentLookThrD3273ad0097f4011B7991c379bb05ee3_cropped_Image />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.FloatingTitle>Talk</Item.FloatingTitle>
                        <Item.Description>
                            I provide overviews of various technologies, highlighting their{' '}
                            <span style={{ color: '#11ff11' }}>pros</span> and{' '}
                            <span style={{ color: '#ff0000' }}>cons</span> to ensure a well-rounded understanding.
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPresentationDec31ff23b9d42b9B84fF87d02d6a391_cropped_Image />
                        </Item.Image>
                    </Item>
                </a>

                <a href="#contact">
                    <Item>
                        <Item.FloatingTitle>Prototype</Item.FloatingTitle>
                        <Item.Description>
                            I will bring your new project into the reality through effective prototyping and seamless
                            transition from concept to implementation.
                        </Item.Description>
                        <Item.Image>
                            <CaveWithPrototypingLaboratoryCa9b82b90ded44a3B7ec344ebb539439_cropped_Image />
                        </Item.Image>
                    </Item>
                </a>
            </Items>
        </Section>
    );
}

/**
 * TODO: Maybe images of caves should be outline (same style as projects+hacking) and not robust cave
 * TODO: Text should be selectable even inside of <a>
 * TODO: Examples how can I help you
 * TODO: Maybe split every item into separate file component
 * TODO: After scrolling highlighting of the section
 * TODO: Rename to HowCanIHelpYou OR Better
 */
