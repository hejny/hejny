import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { CaveSection } from '../sections/Cave/Cave';
import { ContactSection } from '../sections/Contact/Contact';
import { FooterSection } from '../sections/Footer/Footer';
import { WelcomeSection } from '../sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function ContactPage() {
    return (
        <>
            <Head>
                {/* TODO: DRY with index.tsx - probbably some HeadComponent or getTitle */}
                <title>@@@</title>
                <meta name="description" content="@@@" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    <CaveSection />
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    <WelcomeSection />
                    <ContactSection variant='FULL'/>
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: Make some menu
 * TODO: !!! Link to main homepage
 * TODO: [🧈] Best way how to share page css
 * TODO: !! Make the page
 *        <a href=" https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b">*MidJourney</a>
 * TODO: DRY with index.tsx
 */
