import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { ReferencesSection } from '../sections/40-References/References';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';

// TODO: [🔠] What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function ReferencesPage() {
    return (
        <>
            <AppHead subtitle="References" />

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
                    <WelcomeSection variant="SIDEPAGE" />
                    <ReferencesSection variant="FULL" />
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'welcome',
                'pavolhejny',
                'services',
                'references',
                'myprojects',
                'hacking',
                'contact',
                'footer',
                'technical-info' /* <- TODO: [🗃] Filter only needed for this page */,
            ])),
        },
    };
}

/**
 * TODO: Make some menu
 * TODO: [🧈] Best way how to share page css
 *        <a href=" https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b">*MidJourney</a>
 * TODO: DRY with index.tsx
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 */
