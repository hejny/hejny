import { Inter } from '@next/font/google';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/AppHead/AppHead';
import { CaveSection } from '../sections/Cave/Cave';
import { ContactSection } from '../sections/Contact/Contact';
import { FooterSection } from '../sections/Footer/Footer';
import { MyProjectsSection } from '../sections/MyProjects/MyProjects';
import { PavolHejnySection } from '../sections/PavolHejny/PavolHejny';
import { ReferencesSection } from '../sections/References/References';
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
                    <WelcomeSection />
                    <PavolHejnySection variant="SHORT" />
                    <ServicesSection />
                    {/* TODO: <PresentationSection /> */}
                    {/* TODO: <PrototypingSection /> */}
                    {/* TODO: <TechnologiesSection /> */}
                    <ReferencesSection />
                    <MyProjectsSection />
                    {/* TODO: Finish or remove <HackingSection /> */}
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
 * TODO: !!! CS/EN switch
 * TODO: !!! Replace this also as personal page
 */
