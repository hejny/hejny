import { Caveat, Oswald } from '@next/font/google';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { Article } from '../components/Article/Article';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Items } from '../components/Items/Items';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { PavolHejnySection } from '../sections/20-PavolHejny/PavolHejny';
import { ReferencesSection } from '../sections/40-References/References';
import { ContactSection } from '../sections/70-Contact/Contact';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';
import { classNames } from '../utils/classNames';

const oswaltFont = Oswald({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });
const handwrittenFont = Caveat({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });

export default function AiTrainingPage({ lang }: any) {
    const { t } = useTranslation();

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
                    <Section id="Welcome" className={styles.WelcomeSection}>
                        <Link href="/">
                            <h1 className={handwrittenFont.className}>{t('AiTraining.title')}</h1>
                        </Link>

                        <Article content={t('AiTraining.content')} isEnhanced />
                    </Section>
                    <Section id="AiTraining" className={styles.AiTrainingSection}>
                        <h2>{t('PavolHejny.title')}</h2>
                        <Items itemsOnRow={2}>
                            <div>
                                <h3>Varianta 1</h3>
                                <Link className="button" href="/">
                                    10 000 Kč
                                </Link>
                            </div>

                            <div>
                                <h3>Varianta 2</h3>
                            </div>
                        </Items>
                    </Section>
                    <PavolHejnySection variant="SHORT">
                        <Link className="button" href="/">
                            {t('AiTraining.more-about-pavol')}
                        </Link>
                    </PavolHejnySection>
                    <ReferencesSection variant="SHORT" />
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
