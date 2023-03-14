import { Converter } from 'showdown';
import showdownHighlight from 'showdown-highlight';
import styles from './Article.module.css';

interface IArticleProps {
    /**
     * Source markdown
     */
    content: string;

    /**
     * Make for each heading in markdown unique id and scroll to hash
     */
    isHashUsed?: boolean;
}

export function Article(props: IArticleProps) {
    const { content /* [0], isHashUsed */ } = props;

    // [0] const hash = useHash();

    const markdown = content;
    converter.setFlavor('github');
    const html = converter.makeHtml(markdown);

    if (!html) {
        // Note: Do not make empty div for empty article
        return <></>;
    }

    // TODO: [0] If not using hash, remove IDs from html

    // [0] const currentSubsection = hash.substring(1);

    return (
        <>
            <div
                className={styles.Article}
                dangerouslySetInnerHTML={{ __html: html }}
                /*
                [0]
                ref={(element) => {
                    if (!element) {
                        return;
                    }

                    if (currentSubsection) {
                        const section = element.querySelector(`#${currentSubsection}`);

                        if (section) {
                            section.scrollIntoView(true);
                        }
                    }
                }}
                */
            />
            <style>
                {/* [0] !currentSubsection
                    ? ``
                    : `
                        #${currentSubsection}{
                          color: #1b73f7;
                        }

                        /*
                        TODO: Also all items to the next heading
                        #${currentSubsection} + * {
                          color: red;
                        }
                        * /

                `*/}
            </style>
        </>
    );
}

const converter = new Converter({
    extensions: [
        showdownHighlight({
            // Whether to add the classes to the <pre> tag, default is false
            pre: true,
            // Whether to use hljs' auto language detection, default is true
            auto_detection: true,
        }),
    ],
});

/**
 * TODO:[0] Use has if isHashUsed is true
 */
