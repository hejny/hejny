import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import styles from './MyProjects.module.css';
import { ProjectPlaceholder, ProjectTowns } from './projects-images';

export function MyProjects() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in.</p>
            <Items>
                <Shuffle>
                    <Item>
                        <Item.Title>Birds.cz</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Towns.cz</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectTowns />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>Collboard.com</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>
                    <Item>
                        <Item.Title>H-edu.cz</Item.Title>
                        <Item.Description>
                            Lorem <b>ipsum d!!!olor sit amet consectetur adipisicing elit</b>. Maxime mollitia
                        </Item.Description>
                        <Item.Image>
                            <ProjectPlaceholder />
                        </Item.Image>
                    </Item>

                    <a href="https://pavolhejny.com/documents/projects.html">
                        <Item>
                            <Item.Title>All my projects</Item.Title>
                            <Item.Image>
                                <ProjectPlaceholder />
                            </Item.Image>
                        </Item>
                    </a>
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
