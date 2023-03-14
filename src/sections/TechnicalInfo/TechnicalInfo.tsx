import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { VERCEL_GIT_COMMIT_MESSAGE, VERCEL_GIT_COMMIT_SHA, VERSION } from '../../../config';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import styles from './TechnicalInfo.module.css';

export function TechnicalInfo() {
    const { t } = useTranslation('technical-info');

    return (
        <Section>
            <h2>{t('title')}</h2>

            <Article content={t('content')} isEnhanced />

            <div className={styles.field}>
                <span>Version:</span>
                <span>{VERSION}</span>
            </div>

            <div className={styles.field}>
                <span>Repository:</span>
                <span>
                    <Link href="https://github.com/hejny/rapid-prototyping-wizard/">
                        https://github.com/hejny/rapid-prototyping-wizard/
                    </Link>
                </span>
            </div>

            <div className={styles.field}>
                <span>Commit:</span>
                <span>
                    <Link href={`https://github.com/hejny/rapid-prototyping-wizard/commit/${VERCEL_GIT_COMMIT_SHA}`}>
                        {VERCEL_GIT_COMMIT_MESSAGE}
                    </Link>
                </span>
            </div>
        </Section>
    );
}
