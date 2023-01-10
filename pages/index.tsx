import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { Acronym } from '../components/Acronym/Acronym';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Cave } from '../pages-sections/Cave/Cave';
import { Contact } from '../pages-sections/Contact/Contact';
import { Footer } from '../pages-sections/Footer/Footer';
import { Hacking } from '../pages-sections/Hacking/Hacking';
import { MyProjects } from '../pages-sections/MyProjects/MyProjects';
import { Reference } from '../pages-sections/Reference/Reference';
import { Services } from '../pages-sections/Services/Services';
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
                    {/* TODO: !!! Make as <Section/> (without top margin) */}

                    <h1>
                        From 0{/*⬛*/} to 1{/* TODO: Use Hero,💡,⬜*/}
                    </h1>
                    <p>
                        {/* TODO: !!! Use <Shuffle> for technologies */}
                        AI, Neural networks, <Acronym>Virtual Reality</Acronym>, <Acronym>Augmented Reality</Acronym>,
                        Bitcoin, Crypto, Smart contracts, Web3…
                    </p>
                    <p>
                        {/* TODO: !!! Bigger margin between paragraphs */}I live by the new technologies. I will carry
                        out you through the wilderness of the world of new, emerging and disruptive technologies.
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
