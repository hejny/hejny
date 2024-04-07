import { Oswald } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { AiTrainingSection } from '../sections/100-AiTraining/AiTraining';
import { PavolHejnySection } from '../sections/20-PavolHejny/PavolHejny';
import { ReferencesSection } from '../sections/40-References/References';
import { MyProjectsSection } from '../sections/50-MyProjects/MyProjects';
import { ContactSection } from '../sections/70-Contact/Contact';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';
import { classNames } from '../utils/classNames';

const oswaltFont = Oswald({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });

export default function AITrainingPage({ lang }: any) {
    return (
        <>
            <AppHead subtitle="AI Školení" />

            <div className={classNames(styles.page, oswaltFont.className)}>
                <DebugGrid size={new Vector(3, 5)} />

                <header>
                    <CaveSection />
                </header>

                <div className={styles.background}>
                    <TiledBackground />
                </div>

                <main>
                    <WelcomeSection variant="HOMEPAGE" />
                    <PavolHejnySection variant="SHORT" />
                    <AiTrainingSection />
                    <ReferencesSection variant="SHORT" />
                    <MyProjectsSection />
                    <ContactSection variant="SHORT" />
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
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

/**
 * TODO: !!! Can there be /ai-skoleni/ /ai-training/ not generic /cs/ /en/ prefix?
 * TODO: ! Fix Shuffle without React hydration error
 * TODO: !! All links must work
 * TODO: !! Make this a personal page - all projects
 * TODO: Add somewhere button [Get in touch]
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: [🪒] Can be fonts shared between all pages?
 * TODO: Some linting rule not to use:
 *       NOT> import { useTranslation } from 'react-i18next';
 *       BUT
 *       YES> import { useTranslation } from 'next-i18next';
 */
