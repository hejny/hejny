import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { AllMyProjectsProject } from '../../public/projects/components/AllMyProjectsProject';
import { FunctionBuilderProject } from '../../public/projects/components/FunctionBuilderProject';
import { LibrariesProject } from '../../public/projects/components/LibrariesProject';
import { MapsForGeographyProject } from '../../public/projects/components/MapsForGeographyProject';
import { ModulesForCollboardProject } from '../../public/projects/components/ModulesForCollboardProject';
import { VirtualAndAugmentedRealityProject } from '../../public/projects/components/VirtualAndAugmentedRealityProject';
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
                    <FunctionBuilderProject />
                    <LibrariesProject />
                    <MapsForGeographyProject />
                    <ModulesForCollboardProject />
                    <VirtualAndAugmentedRealityProject />
                </Shuffle>
                <AllMyProjectsProject />
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
