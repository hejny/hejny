import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { FunctionBuilderProject } from '../../public/projects/components/FunctionBuilderProject';
import { LibrariesProject } from '../../public/projects/components/LibrariesProject';
import { MapsForGeographyProject } from '../../public/projects/components/MapsForGeographyProject';
import { ModulesForCollboardProject } from '../../public/projects/components/ModulesForCollboardProject';
import { WebVrProject } from '../../public/projects/components/WebVrProject';
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
                    <WebVrProject />
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
