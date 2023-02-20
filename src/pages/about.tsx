import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { VERSION } from '../../config';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { CaveSection } from '../sections/Cave/Cave';
import { FooterSection } from '../sections/Footer/Footer';
import { HeadSection } from '../sections/HeadSection/HeadSection';
import { WelcomeSection } from '../sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Midjourney() {
    return (
        <>
            <Head>
                <HeadSection subtitle="Gallery" />
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
                    <WelcomeSection /> {/* <- TODO: Children here */}
                    <Section>
                        <h2>About</h2>
                        <p>Technical info about the page</p>
                        Version: <a href="https://github.com/hejny/rapid-prototyping-wizard/">{VERSION}</a>
                        {/* !!! more */}
                    </Section>
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
 * TODO: [🧈] Best way how to share page css
 * TODO: DRY with index.tsx
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
