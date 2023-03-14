import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import styles from './Welcome.module.css';

interface WelcomeProps {
    variant: 'HOMEPAGE' | 'SIDEPAGE';
}

export function WelcomeSection(props: WelcomeProps) {
    const { variant } = props;

    const { t } = useTranslation(['welcome', 'common']);

    return (
        <Section id="welcome" className={styles.welcome}>
            <Link href="/">
                <h1>{t('title', { ns: 'common' })}</h1>
                {/* <- TODO: [🔠] This should be handwritten */}
            </Link>

            {variant === 'HOMEPAGE' && <Article content={t('content')} isEnhanced />}

            {variant === 'SIDEPAGE' && (
                <Link className="button" href="/">
                    {t('back-home')}
                </Link>
            )}
        </Section>
    );
}

/**
 * TODO: Use somewhere <Acronym>Minimum viable product</Acronym>
 *     > Je lepší mít funkční MVP než mnoho měsíců-let pracovat kompletním vyladěném řešení https://youtu.be/4Z4EW9kSAX8
 * TODO: Maybe use <Shuffle> for technologies
 */
