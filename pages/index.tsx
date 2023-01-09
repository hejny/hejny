import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { Cave } from '../components/Cave/Cave';
import { Contact } from '../components/Contact/Contact';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Footer } from '../components/Footer/Footer';
import { Hacking } from '../components/Hacking/Hacking';
import { MyProjects } from '../components/MyProjects/MyProjects';
import { Reference } from '../components/Reference/Reference';
import { Services } from '../components/Services/Services';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        // TODO: !!! Change from boilerplate
        <>
            <Head>
                <title>🧙‍♂️ Rapid prototyping wizard !!!</title>
                <meta name="description" content="!!!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 4)} />

                <header>
                    <Cave />
                </header>

                <main>
                    {/* TODO: Make as <Component/> */}
                    <h1>From 0 to 1</h1>

                    {/* TODO: Make as <Component/> */}
                    <p>
                        AI, Neural networks, VR/AR, WebGL, WebVR, Webassembly, WebSockets. Bitcoin, Ethereum, Cardano,
                        Crypto, Smart contracts, Web3, ...
                    </p>

                    <Services />

                    <MyProjects />

                    <Hacking />
                    <Reference />
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
 * TODO: !!! Do not oversize right border
 * TODO: !!! Debug mode for grid
 * TODO: !!! Custom 404 page
 * TODO: !!! * generated with MidJourney
 * TODO: The best way to import the fonts
 * TODO: !!! Add Google Analytics
 * TODO: !!! Add cookies icon
 * TODO: !!! Add AMP capability
 * TODO: !!! Add Preview image for Facebook, Facebook App/Page, Twitter, Instagram, OG images, description and keywords
 */
