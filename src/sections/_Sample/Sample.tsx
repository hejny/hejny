import { useTranslation } from 'next-i18next';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import styles from './TechnicalInfo.module.css';

export function SampleSection() {
    // TODO: !!! Make only one namespace for i18n
    const { t } = useTranslation('sample');

    return (
        <Section
            id="sample"
            /* <- !!! Make ids case-insensitive */ className={styles.SampleSection /* <- !!! Unite ACRY sections */}
        >
            <h2>{t('title')}</h2>

            <Article content={t('content')} isEnhanced />

            {/* ... */}
        </Section>
    );
}
