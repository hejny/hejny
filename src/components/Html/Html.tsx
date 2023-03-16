import parse from 'html-react-parser';
import { classNames } from '../../utils/classNames';
import styles from './Html.module.css';

interface HtmlProps {
    html: string;
    className?: string;
}

export function Html(props: HtmlProps) {
    const { html, className } = props;

    const content = parse(html, {
        /*
        replace(domNode) {
            if (domNode.type === 'tag') {
                return <>{domToReact(domNode.children)}</>;
            }
        },
        */
    });

    return <div className={classNames(styles.html, className)}>{content}</div>;
}
