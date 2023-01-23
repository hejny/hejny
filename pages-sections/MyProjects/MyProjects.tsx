import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { BirdsCzProject } from '../../public/projects/components/BirdsCzProject';
import { CollboardProject } from '../../public/projects/components/CollboardProject';
import { CzechEventsProject } from '../../public/projects/components/CzechEventsProject';
import { HEduProject } from '../../public/projects/components/HEduProject';
import { TownsProject } from '../../public/projects/components/TownsProject';
import { YourProjectProject } from '../../public/projects/components/YourProjectProject';
import styles from './MyProjects.module.css';

export function MyProjects() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in:</p>
            <Items>
                <Shuffle>
                    <BirdsCzProject />
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
