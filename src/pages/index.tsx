import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { PavolHejnySection } from '../sections/20-PavolHejny/PavolHejny';
import { ServicesSection } from '../sections/30-Services/Services';
import { ReferencesSection } from '../sections/40-References/References';
import { MyProjectsSection } from '../sections/50-MyProjects/MyProjects';
import { ContactSection } from '../sections/70-Contact/Contact';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';

// TODO: [🔠] What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function IndexPage({ lang }: any) {
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
                    <WelcomeSection variant="HOMEPAGE" />
                    <PavolHejnySection variant="SHORT" />
                    <ServicesSection />
                    {/* TODO: <PresentationSection /> */}
                    {/* TODO: <PrototypingSection /> */}
                    {/* TODO: <TechnologiesSection /> */}
                    {/* TODO: <PricingSection />
                                Cena za služby
                                Vůbec nejsem fanoušek ceny za hodinu – ve světě rychle automatizace jde pouze o o velmi o krok naprosto špatným směrem který penalizuje efektivitu
                                Přijímám platby v kryptoměnách nejen v Bitcoinu ale v jste, kterou chcete
                    */}

                    {/* <WhereToMeetMe> */}
                    <ReferencesSection variant="SHORT" />
                    <MyProjectsSection />
                    {/* TODO: Finish or remove <HackingSection /> */}
                    <ContactSection variant="SHORT" />
                    {/* <SampleSection variant="SHORT" /> */}
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
                'projects',
                'hacking',
                'contact',
                'footer',
                'technical-info' /* <- TODO: [🗃] Filter only needed for this page */,
            ])),
        },
    };
}

/**
 * TODO: !!! Stars ✨ around the cursor on all pages
 * TODO: !! Fix Shuffle without React hydration error
 * TODO: !!! All links must work
 * TODO: !!! Replace personal page - all projects
 * TODO: Add somewhere button [Get in touch]
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: Some linting rule not to use:
 *       NOT> import { useTranslation } from 'react-i18next';
 *       BUT
 *       YES> import { useTranslation } from 'next-i18next';
 */
