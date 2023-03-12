import { AllMyProjectsProject } from '../../../public/projects/all-projects/AllMyProjectsProject';
import { CollboardModulesSdkProject } from '../../../public/projects/collboard-modules-sdk/CollboardModulesSdkProject';
import { MapsProject } from '../../../public/projects/maps/MapsProject';
import { OpenSourceProject } from '../../../public/projects/open-source/OpenSourceProject';
import { VisualMathematicsProject } from '../../../public/projects/visual-mathematics/VisualMathematicsProject';
import { VrArProject } from '../../../public/projects/vr-ar/VrArProject';
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
