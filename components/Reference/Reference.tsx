import { Item } from '../Items/Item';
import { Items } from '../Items/Items';
import { ProjectPlaceholder } from '../MyProjects/projects-images';
import { Section } from '../Section/Section';
import styles from './Reference.module.css';

export function Reference() {
    return (
        <Section id="reference" className={styles.reference}>
            <h2>Reference</h2>

            <Items>
                <Item>
                    <Item.Title>Birds.cz</Item.Title>
                    <Item.Description>
                        Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                    </Item.Description>
                    <Item.Image>
                        <ProjectPlaceholder />
                    </Item.Image>
                </Item>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Round people
 * TODO: !!! Ask for reference
 * TODO: !!! Add links to multiple socials
 */
