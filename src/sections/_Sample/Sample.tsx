import { useTranslation } from 'next-i18next';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import styles from './Sample.module.css';

interface SampleProps {
    variant: 'SHORT' | 'FULL';
}

export function SampleSection(props: SampleProps) {
    const { variant } = props;

    // TODO: !!! Make only one namespace for i18n
    const { t } = useTranslation('Sample');

    return (
        <Section id="Sample" className={styles.SampleSection}>
            <h2>{t('title')}</h2>

            <Article content={t('content')} isEnhanced />

            {variant === 'FULL' && <Article content={t('content')} isEnhanced />}

            {/* ... */}
        </Section>
    );
}
