import { Inter } from '@next/font/google';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/AppHead/AppHead';
import { CaveSection } from '../sections/Cave/Cave';
import { FooterSection } from '../sections/Footer/Footer';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function PavolHejny() {
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

                <main>{/* !! */}</main>

                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: !! Replace this also as personal page
 * TODO: [🧈] Best way how to share page css
 * TODO: Custom 404 page
 * TODO: The best way to import the fonts
 * TODO: Add Google Analytics
 * TODO: Add cookies icon
 * TODO: Add AMP capability
 * TODO: Add Preview image for Facebook, Facebook App/Page, Twitter, Instagram, OG images, description and keywords
 */
