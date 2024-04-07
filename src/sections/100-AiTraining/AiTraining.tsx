import { useTranslation } from 'next-i18next';
import { CollboardProject } from '../../../public/projects/collboard/CollboardProject';
import { WebgptProject } from '../../../public/projects/webgpt/WebgptProject';
import { Article } from '../../components/Article/Article';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import styles from './AiTraining.module.css';

export function AiTrainingSection() {
    const { t } = useTranslation();

    return (
        <Section id="AiTraining" className={styles.AiTrainingSection}>
            <h2>{t('Projects.title')}</h2>
            <Article content={t('Projects.content')} isEnhanced />
            <Items>
                <WebgptProject />
                <CollboardProject />
            </Items>
        </Section>
    );
}

/**
 * TODO: !!! Add WebGPT and Promptbook
 * TODO: Maybe rename to just Projects
 */
