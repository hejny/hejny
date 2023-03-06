import { AllMyProjectsProject } from '../../../public/projects/AllMyProjects/AllMyProjectsProject';
import { CollboardModulesSdkProject } from '../../../public/projects/CollboardModulesSdk/CollboardModulesSdkProject';
import { MapsProject } from '../../../public/projects/Maps/MapsProject';
import { OpenSourceProject } from '../../../public/projects/OpenSource/OpenSourceProject';
import { VisualMathematicsProject } from '../../../public/projects/VisualMathematics/VisualMathematicsProject';
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
                    <VisualMathematicsProject />
                    <OpenSourceProject />
                    <MapsProject />
                    <CollboardModulesSdkProject />
                    <VrArProject />
                </Shuffle>
                <AllMyProjectsProject />
            </Items>
        </Section>
    );
}
