import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';

import styles from './Hacking.module.css';
import { AllMyProjectsHacking } from './hackings/AllMyProjectsHacking';
import { AllMyTalksHacking } from './hackings/AllMyTalksHacking';
import { BirdsCzHacking } from './hackings/BirdsCzHacking';
import { CollboardHacking } from './hackings/CollboardHacking';
import { CzechEventsHacking } from './hackings/CzechEventsHacking';
import { FunctionBuilderHacking } from './hackings/FunctionBuilderHacking';
import { HEduHacking } from './hackings/HEduHacking';
import { LibrariesHacking } from './hackings/LibrariesHacking';
import { MapsForGeographyHacking } from './hackings/MapsForGeographyHacking';
import { ModulesForCollboardHacking } from './hackings/ModulesForCollboardHacking';
import { TownsHacking } from './hackings/TownsHacking';
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
                    <AllMyProjectsHacking />
                    <AllMyTalksHacking />
                    <BirdsCzHacking />
                    <CollboardHacking />
                    <CzechEventsHacking />
                    <FunctionBuilderHacking />
                    <HEduHacking />
                    <LibrariesHacking />
                    <MapsForGeographyHacking />
                    <ModulesForCollboardHacking />
                    <TownsHacking />
                    <WebVrHacking />
                    {/* TODO: Some of theese hackings should be in projects */}
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add links
 */
