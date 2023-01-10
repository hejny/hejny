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
            <p>
                Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia, molestiae quas vel
                sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
                modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum.
            </p>
            <Items>
                <Shuffle>
                    <Item>
                        <Item.Title>Case</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Case</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Case</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Case</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Case</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
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
