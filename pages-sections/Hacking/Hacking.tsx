import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { ProjectPlaceholder } from '../MyProjects/projects-images';

import styles from './Hacking.module.css';

export function Hacking() {
    return (
        <Section id="hacking" className={styles.hacking}>
            <h2>Hacking!</h2>
            <p>Case studies what could be done in 24/48 hours</p>
            <Items>
                <Shuffle>
                    <Item>
                        <Item.Title>Web VR</Item.Title>
                        <Item.Description>DevConf, CzechVRFest, Hackuj Stát</Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>SigmaStamp</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Toilet finder</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>AI Batch</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>More</Item.Title>
                        <Item.Description>Find on my github / codepen</Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
