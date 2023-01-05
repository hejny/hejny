import { Item } from '../Items/Item';
import { Items } from '../Items/Items';
import { Section } from '../Section/Section';
import {
    CaveOfIdeasInLightbulbWithTransparentLookThrImage,
    CaveWithPresentationImage,
    CaveWithPrototypingLaboratoryImage,
} from '../wallpapers';
import styles from './Services.module.css';

export function Services() {
    return (
        <Section id="services" className={styles.services}>
            <h2>How can I help you?</h2>

            <Items>
                <Item title="Consulting">
                    <CaveOfIdeasInLightbulbWithTransparentLookThrImage />
                </Item>
                <Item title="Talk">
                    <CaveWithPresentationImage />
                </Item>
                <Item title="Prototyping">
                    <CaveWithPrototypingLaboratoryImage />
                </Item>
            </Items>
        </Section>
    );
}
