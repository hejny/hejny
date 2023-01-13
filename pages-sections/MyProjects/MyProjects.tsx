import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { Tag } from '../../components/Tag/Tag';
import styles from './MyProjects.module.css';
import { ProjectPlaceholder, ProjectTowns } from './projects-images';

export function MyProjects() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in:</p>
            <Items>
                <Shuffle>
                    <a href="https://!!!">
                        <Item>
                            <Item.Title>Birds.cz</Item.Title>
                            <Item.Description>
                                A variety of projects focusing on citizenship science for the Czech Society of
                                Ornithology
                            </Item.Description>
                            <Item.Image>
                                <ProjectPlaceholder />
                            </Item.Image>
                        </Item>{' '}
                    </a>

                    <a href="https://!!!">
                        <Item>
                            <Item.Title>Towns.cz</Item.Title>
                            <Item.Description>
                                Browser online game
                                <Tag>WebGL</Tag>
                            </Item.Description>
                            <Item.Image>
                                <ProjectTowns />
                            </Item.Image>
                        </Item>{' '}
                    </a>

                    <a href="https://!!!">
                        <Item>
                            <Item.Title>Collboard.com</Item.Title>
                            <Item.Description>
                                Virtual online collaborative whiteboard started during the the initial week of the
                                pandemic-induced lockdown.
                            </Item.Description>
                            <Item.Image>
                                <ProjectPlaceholder />
                            </Item.Image>
                        </Item>{' '}
                    </a>

                    <a href="https://!!!">
                        <Item>
                            <Item.Title>H-edu.cz</Item.Title>
                            <Item.Description>Online pupil books for schools and teachers</Item.Description>
                            <Item.Image>
                                <ProjectPlaceholder />
                            </Item.Image>
                        </Item>
                    </a>

                    <a href="https://!!!">
                        <Item>
                            <Item.Title>Czech.events</Item.Title>
                            <Item.Description>Most interesting events in Czechia in Tech comunity</Item.Description>
                            <Item.Image>
                                <ProjectPlaceholder />
                            </Item.Image>
                        </Item>
                    </a>

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
