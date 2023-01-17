import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { AllMyProjectsHacking } from '../Hacking/hackings/AllMyProjectsHacking';
import { BirdsCzHacking } from '../Hacking/hackings/BirdsCzHacking';
import { CollboardHacking } from '../Hacking/hackings/CollboardHacking';
import { CzechEventsHacking } from '../Hacking/hackings/CzechEventsHacking';
import { HEduHacking } from '../Hacking/hackings/HEduHacking';
import { TownsHacking } from '../Hacking/hackings/TownsHacking';
import styles from './MyProjects.module.css';

export function MyProjects() {
    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>What have I worked on?</h2>
            <p>Here are some of the larger projects that I have been involved in:</p>
            <Items>
                <Shuffle>
                    <BirdsCzHacking />
                    <TownsHacking />
                    <CollboardHacking />
                    <HEduHacking />
                    <CzechEventsHacking />
                </Shuffle>
                <AllMyProjectsHacking />
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
