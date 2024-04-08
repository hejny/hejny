import { useTranslation } from 'next-i18next';
import { Article } from '../../components/Article/Article';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import styles from './AiTraining.module.css';
import { AiTrainingVariant } from './AiTrainingVariant';

export function AiTrainingSection() {
    const { t } = useTranslation();

    return (
        <Section id="AiTraining" className={styles.AiTrainingSection}>
            <h2>{t('AiTraining.title')}</h2>
            <Article content={t('AiTraining.content')} isEnhanced />
            <Items itemsOnRow={2}>
                <AiTrainingVariant variant="variant1" />
                <AiTrainingVariant variant="variant2" />
            </Items>
        </Section>
    );
}
