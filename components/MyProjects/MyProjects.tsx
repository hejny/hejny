import { Item } from '../Items/Item';
import { Items } from '../Items/Items';
import { Section } from '../Section/Section';
import {
    CaveOfIdeasInLightbulbWithTransparentLookThrImage,
    CaveWithPresentationImage,
    CaveWithPrototypingLaboratoryImage,
} from '../wallpapers';
import styles from './MyProjects.module.css';

export function MyProjects() {
    return (
        <Section id="myProjects" className={styles.myProjects}>
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
