import { Oswald } from '@next/font/google';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { Article } from '../components/Article/Article';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { CaveSection } from '../sections/01-Cave/Cave';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { AiTrainingSection } from '../sections/100-AiTraining/AiTraining';
import { PavolHejnySection } from '../sections/20-PavolHejny/PavolHejny';
import { ReferencesSection } from '../sections/40-References/References';
import { ContactSection } from '../sections/70-Contact/Contact';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';
import { classNames } from '../utils/classNames';

const oswaltFont = Oswald({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });

export default function AiTrainingPage({ lang }: any) {
    const { t } = useTranslation();

    return (
        <>
            <AppHead subtitle={t('AiTraining.title') as string} />

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
                    <AiTrainingSection />
                    <Section id="AiTrainingFaq">
                        <Article content={t('AiTraining.faq')} isEnhanced />
                    </Section>
                    <PavolHejnySection>
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
