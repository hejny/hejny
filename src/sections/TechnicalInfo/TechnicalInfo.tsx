import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { VERCEL_GIT_COMMIT_MESSAGE, VERCEL_GIT_COMMIT_SHA, VERSION } from '../../../config';
import { Section } from '../../components/Section/Section';
import styles from './TechnicalInfo.module.css';

export function TechnicalInfo() {
    const { t } = useTranslation('technical-info');
    // !!! i18n

    return (
        <Section>
            <h2>About</h2>
            <p>Technical info about the page</p>

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
