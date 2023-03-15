import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import pavolHejny from '../../../public/people/pavol-hejny.transparent.png';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import styles from './PavolHejny.module.css';

interface PavolHejnyProps {
    variant: 'SHORT' | 'FULL';
}

export function PavolHejnySection(props: PavolHejnyProps) {
    const { variant } = props;

    const { t } = useTranslation('pavolhejny');

    return (
        <Section id="PavolHejny" className={styles.PavolHejnySection}>
            <h2>{t('title')}</h2>

            <Image
                alt="Portrait photo of Pavol Hejný"
                priority
                src={pavolHejny}
                // TODO: [🧑] Make some <ImageGravatar component; This is me@pavolhejny.com
                //src="https://www.gravatar.com/avatar/10bceb8965947164502b4e7b3314733d?s=1024"
                // width={1024}
                // height={1024}
                draggable="false"
                placeholder="blur"
            />

            <Article content={t('content')} isEnhanced />
        </Section>
    );
}

/**
 * TODO: Should we translate alt of the images like "Portrait photo of Pavol Hejný"
 * TODO: Add dynamically from https://raw.githubusercontent.com/hejny/hejny/main/documents/contact.md
 *       1) Download from external repo script (and add copy warning)
 *       2) Convert from local markdown to conponent
 *       3) Add also VCard
 *       4) Add also crypto
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
