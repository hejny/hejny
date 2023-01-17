import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';

import styles from './Hacking.module.css';
import { FunctionBuilderHacking } from './hackings/FunctionBuilderHacking';
import { LibrariesHacking } from './hackings/LibrariesHacking';
import { MapsForGeographyHacking } from './hackings/MapsForGeographyHacking';
import { ModulesForCollboardHacking } from './hackings/ModulesForCollboardHacking';
import { WebVrHacking } from './hackings/WebVRHacking';

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
                    <FunctionBuilderHacking />
                    <LibrariesHacking />
                    <MapsForGeographyHacking />
                    <ModulesForCollboardHacking />
                    <WebVrHacking />
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
