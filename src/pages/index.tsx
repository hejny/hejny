import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { Cave } from '../pages-sections/Cave/Cave';
import { Contact } from '../pages-sections/Contact/Contact';
import { Footer } from '../pages-sections/Footer/Footer';
import { Hacking } from '../pages-sections/Hacking/Hacking';
import { MyProjects } from '../pages-sections/MyProjects/MyProjects';
import { Services } from '../pages-sections/Services/Services';
import { Welcome } from '../pages-sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>🧙‍♂️ Rapid prototyping wizard @@@</title>
                <meta name="description" content="@@@" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />

                <header>
                    <Cave />
                </header>

                <div className={styles.background}>
                    <TiledBackground />
                </div>

                <main>
                    <Welcome />
                    <Services />

                    <MyProjects />
                    <Hacking />
                    {/* TODO: <Reference /> */}
                    <Contact />
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: [🧈] Best way how to share page css
 * TODO: Custom 404 page
 * TODO: The best way to import the fonts
 * TODO: Add Google Analytics
 * TODO: Add cookies icon
 * TODO: Add AMP capability
 * TODO: Add Preview image for Facebook, Facebook App/Page, Twitter, Instagram, OG images, description and keywords
 */
