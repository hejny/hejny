import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { AllMyProjectsProject } from '../../public/projects/components/AllMyProjectsProject';
import { FunctionsProject } from '../../public/projects/components/FunctionsProject';
import { LibrariesProject } from '../../public/projects/components/LibrariesProject';
import { MapsProject } from '../../public/projects/components/MapsProject';
import { ModulesProject } from '../../public/projects/components/ModulesProject';
import { VrArProject } from '../../public/projects/components/VrArProject';
import styles from './Hacking.module.css';

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
                    <FunctionsProject />
                    <LibrariesProject />
                    <MapsProject />
                    <ModulesProject />
                    <VrArProject />
                </Shuffle>
                <AllMyProjectsProject />
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
