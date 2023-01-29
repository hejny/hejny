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
                <Acronym>Virtual Reality</Acronym>, <Acronym>Augmented Reality</Acronym>,{' '}
                <Acronym abbr="XR">Extended Reality</Acronym>, GraphQL <Acronym>Progressive Web Apps</Acronym>,{' '}
                <Acronym abbr="SPA">Single-page Apps</Acronym>,<Acronym>Artificial Intelligence</Acronym>,{' '}
                <Acronym>Machine Learning</Acronym>, Blockchain, Smart contracts, Web3, Chatbots… 🤯
            </p>

            <p>
                Are you realising the <b>full potential of technology in your business?</b>
            </p>

            <p>
                With the ever-evolving landscape of technology, it can be challenging to keep up to date and use it to
                its potential in your business. However, by incorporating cutting-edge tools such as advanced browser
                APIs, <Acronym abbr="WASM">Web Assembly</Acronym>, using TypeScript, and benefiting from GPT when
                writing code, you can code, you can differentiate your business and achieve new levels of efficiency,
                innovation and customer engagement. 🚀
            </p>
        </Section>
    );
}

/**
 * TODO: Maybe use <Shuffle> for technologies
 */
