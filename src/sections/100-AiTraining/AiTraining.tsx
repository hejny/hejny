import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Article } from '../../components/Article/Article';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import styles from './AiTraining.module.css';

export function AiTrainingSection() {
    const { t } = useTranslation();

    return (
        <Section id="AiTraining" className={styles.AiTrainingSection}>
            <h2>{t('AiTraining.title')}</h2>
            <Article content={t('AiTraining.content')} isEnhanced />
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
    );
}

/**
 * TODO: !! Add WebGPT and Promptbook
 * TODO: Maybe rename to just Projects
 */
