import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { Tag } from '../../components/Tag/Tag';
import { ProjectPlaceholder } from '../MyProjects/projects-images';

import styles from './Hacking.module.css';
import { WebVRHacking } from './hacking/WebVRHacking';

export function Hacking() {
    return (
        <Section id="hacking" className={styles.hacking}>
            <h2>Hacking!</h2>
            <p>These are some hackathon undertakings and proof of concept initiatives I have been involved in.</p>
            <p>
                Case studies what could be <b>done in 24/48 hours</b>
            </p>
            <Items>
                <Shuffle>
                    <WebVRHacking />
                    <Item>
                        <Item.Title>SigmaStamp</Item.Title>
                        <Item.Description>
                            <p>Tool for time-signing documents on the blockchain.</p>
                            <p>
                                <Tag>Smart contract</Tag>
                            </p>
                            {/* TODO: Wining 3rd price on hackathon. */}
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
