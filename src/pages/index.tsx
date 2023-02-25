import { Inter } from '@next/font/google';
import { Vector } from 'xyzt';
import { Acronym } from '../components/Acronym/Acronym';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/AppHead/AppHead';
import { CaveSection } from '../sections/Cave/Cave';
import { ContactSection } from '../sections/Contact/Contact';
import { FooterSection } from '../sections/Footer/Footer';
import { HackingSection } from '../sections/Hacking/Hacking';
import { MyProjectsSection } from '../sections/MyProjects/MyProjects';
import { ServicesSection } from '../sections/Services/Services';
import { WelcomeSection } from '../sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <AppHead />

            <div className={styles.page}>
                <DebugGrid size={new Vector(3, 5)} />

                <header>
                    <CaveSection />
                </header>

                <div className={styles.background}>
                    <TiledBackground />
                </div>

                <main>
                    <WelcomeSection>
                        <p>
                            <Acronym>Virtual Reality</Acronym>, <Acronym>Augmented Reality</Acronym>,{' '}
                            <Acronym abbr="XR">Extended Reality</Acronym>, GraphQL{' '}
                            <Acronym>Progressive Web Apps</Acronym>, <Acronym abbr="SPA">Single-page Apps</Acronym>,
                            <Acronym>Artificial Intelligence</Acronym>, <Acronym>Machine Learning</Acronym>, Blockchain,
                            Smart contracts, Web3, Chatbots… 🤯
                        </p>

                        <p>
                            Are you realising the <b>full potential of technology in your business?</b>
                        </p>

                        <p>
                            With the ever-evolving landscape of <b>exponential Technologies</b>, it can be challenging
                            to keep up to date and use it to its potential in your business. However, by incorporating
                            cutting-edge tools such as advanced browser APIs,{' '}
                            <Acronym abbr="WASM">Web Assembly</Acronym>, using TypeScript, and benefiting from GPT when
                            writing code, you can code, you can differentiate your business and achieve new levels of
                            efficiency, innovation and customer engagement. 🚀
                        </p>
                    </WelcomeSection>
                    <ServicesSection />

                    <MyProjectsSection />
                    <HackingSection />
                    {/* TODO: <Reference /> */}
                    <ContactSection variant="SHORT" />
                </main>

                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: !!! Replace this also as personal page
 */
