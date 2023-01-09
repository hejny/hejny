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
            <p>
                Lorem <b>ipsum dolor sit amet consectetur adipisicing elit</b>. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
                modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum.
            </p>
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

/**
 * TODO: !!! Rename to HowCanIHelpYou OR Better
 */
