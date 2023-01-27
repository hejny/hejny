import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { BirdsProject } from '../../public/projects/Birds/BirdsProject';
import { CollboardProject } from '../../public/projects/Collboard/CollboardProject';
import { CzechEventsProject } from '../../public/projects/CzechEvents/CzechEventsProject';
import { HEduProject } from '../../public/projects/HEdu/HEduProject';
import { TownsProject } from '../../public/projects/Towns/TownsProject';
import { YourProjectProject } from '../../public/projects/YourProject/YourProjectProject';
import styles from './MyProjects.module.css';

export function MyProjects() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in:</p>
            <Items>
                <Shuffle>
                    <BirdsProject />
                    <TownsProject />
                    <CollboardProject />
                    <HEduProject />
                    <CzechEventsProject />
                </Shuffle>
                <YourProjectProject />
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
