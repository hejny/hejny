import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import favicon from '../../../public/favicon.ico';
import cave_of_ideas_with_transparent_look_through from '../../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b.png';
import { LanguagePicker } from '../../components/LanguagePicker/LanguagePicker';
import { removeMarkdownFormatting } from '../../utils/content/removeMarkdownFormatting';
import { removeMarkdownLinks } from '../../utils/content/removeMarkdownLinks';

interface AppHeadProps {
    subtitle?: string;
}

export function AppHead(props: AppHeadProps) {
    const { subtitle } = props;

    const { t } = useTranslation();
    const title = removeMarkdownFormatting(removeMarkdownLinks(t('title') || ''));
    const description = removeMarkdownFormatting(removeMarkdownLinks(t('description') || ''));

    return (
        <>
            <Head>
                <title>{`${!subtitle ? `` : `${subtitle} ✨ `}${title}`}</title>
                <meta name="description" content={description} />
                <link rel="icon" href={favicon.src} />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={cave_of_ideas_with_transparent_look_through.src} />

                <meta name="theme-color" content="#000000" />
            </Head>
            <LanguagePicker />
        </>
    );
}

/**
 * TODO: Create better summary
 * TODO: Maybe import from some JSON
 * TODO: What is ideal viewport value
 */
