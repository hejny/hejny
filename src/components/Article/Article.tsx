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
    const { content, isHashUsed } = props;

    // TODO: !!! [0] If not using hash, do not use it, if yes use it
    // [0] const hash = useHash();

    const markdown = content;
    converter.setFlavor('github');
    const html = converter.makeHtml(markdown);

    // TODO: !!! If not using hash, remove IDs

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
