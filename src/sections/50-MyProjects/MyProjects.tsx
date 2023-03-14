import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { BirdsProject } from '../../../public/projects/birds/BirdsProject';
import { CollboardProject } from '../../../public/projects/collboard/CollboardProject';
import { CzechEventsProject } from '../../../public/projects/czech-events/CzechEventsProject';
import { HEduProject } from '../../../public/projects/h-edu/HEduProject';
import { TownsProject } from '../../../public/projects/towns/TownsProject';
import { YourProjectProject } from '../../../public/projects/your-project/YourProjectProject';
import { Article } from '../../components/Article/Article';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import styles from './MyProjects.module.css';

export function MyProjectsSection() {
    const { t } = useTranslation('projects');

    return (
        <Section id="projects" className={styles.myProjects}>
            <h2>{t('title')}</h2>
            <Article content={t('content')} />
            <Items>
                <Shuffle seed="projects">
                    <TownsProject />
                    <BirdsProject />
                    <CollboardProject />
                    <CzechEventsProject />
                    <HEduProject />
                </Shuffle>
                <YourProjectProject />
            </Items>

            <Link className="button" href="https://pavolhejny.com/documents/projects.html">
                {t('all-projects')}
            </Link>
        </Section>
    );
}
