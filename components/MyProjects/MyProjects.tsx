import { Item } from '../Items/Item';
import { Items } from '../Items/Items';
import { Section } from '../Section/Section';
import styles from './MyProjects.module.css';
import { ProjectPlaceholder, ProjectTowns } from './projects-images';

export function MyProjects() {
    return (
        <Section id="myProjects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>

            <Items>
                <Item title="Birds.cz" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectPlaceholder />
                </Item>
                <Item title="Towns.cz" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectTowns />
                </Item>
                <Item title="Collboard.com" description="Afdasdf fdsf sfsdf werwert dsgsdg">
                    <ProjectPlaceholder />
                </Item>
            </Items>
        </Section>
    );
}
