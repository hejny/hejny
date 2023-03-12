import { BirdsProject } from '../../../public/projects/0-birds/BirdsProject';
import { CollboardProject } from '../../../public/projects/0-collboard/CollboardProject';
import { CzechEventsProject } from '../../../public/projects/czech-events/CzechEventsProject';
import { HEduProject } from '../../../public/projects/h-edu/HEduProject';
import { TownsProject } from '../../../public/projects/0-towns/TownsProject';
import { YourProjectProject } from '../../../public/projects/your-project/YourProjectProject';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import styles from './MyProjects.module.css';

export function MyProjectsSection() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in:</p>
            <Items>
                <Shuffle seed="projects">
                    <TownsProject />
                    <BirdsProject />
                    <CollboardProject />
                    <CzechEventsProject />
                    <HEduProject />
                </Shuffle>
                <YourProjectProject />
            </Items>
        </Section>
    );
}
