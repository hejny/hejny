import { Acronym } from '../../components/Acronym/Acronym';
import { Section } from '../../components/Section/Section';
import styles from './Welcome.module.css';

export function Welcome() {
    return (
        <Section id="welcome" className={styles.welcome}>
            <h1>
                From 0{/*⬛*/} to 1{/* TODO: Use Hero,💡,⬜*/}
            </h1>
            <p>
                AI, Neural networks, <Acronym>Virtual Reality</Acronym>, <Acronym>Augmented Reality</Acronym>, Bitcoin,
                Crypto, Smart contracts, Web3…
            </p>
        </Section>
    );
}

/**
 * TODO: Maybe use <Shuffle> for technologies
 */
