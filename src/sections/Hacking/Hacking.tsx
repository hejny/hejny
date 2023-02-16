import { AllMyProjectsProject } from '../../../public/projects/AllMyProjects/AllMyProjectsProject';
import { FunctionsProject } from '../../../public/projects/Functions/FunctionsProject';
import { LibrariesProject } from '../../../public/projects/Libraries/LibrariesProject';
import { MapsProject } from '../../../public/projects/Maps/MapsProject';
import { ModulesProject } from '../../../public/projects/Modules/ModulesProject';
import { VrArProject } from '../../../public/projects/VrAr/VrArProject';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import styles from './Hacking.module.css';

export function HackingSection() {
    return (
        <Section id="hacking" className={styles.hacking}>
            <h2>Hacking!</h2>
            <p>These are some hackathon undertakings and proof of concept initiatives I have been involved in.</p>
            <p>
                Case studies what could be <b>done in 24/48 hours</b>
            </p>
            <Items>
                <Shuffle seed="hacking">
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
