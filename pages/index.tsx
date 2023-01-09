import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { Cave } from '../components/Cave/Cave';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
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

            <main className={styles.page}>
                <DebugGrid size={new Vector(5, 3)} />

                <div className={styles.cave}>
                    <Cave />
                </div>

                <div className={styles.content}>
                    {/* TODO: Make as <Component/> */}
                    <h1>From 0 to 1</h1>

                    {/* TODO: Make as <Component/> */}
                    <p>
                        AI, Neural networks, VR/AR, WebGL, WebVR, Webassembly, WebSockets. Bitcoin, Ethereum, Cardano,
                        Crypto, Smart contracts, Web3, ...
                    </p>

                    <Services />
                </div>
            </main>
        </>
    );
}

/**
 * TODO: !!! Do not oversize right border
 * TODO: !!! Debug mode for grid
 * TODO: !!! Custom 404 page
 * TODO: !!! * generated with MidJourney
 * TODO: The best way to import the fonts
 */
