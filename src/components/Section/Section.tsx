import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import articleStyles from '../Article/Article.module.css';
import styles from './Section.module.css';

export interface SectionProps {
    children: ReactNode;

    /**
     * Unique ID of the section which can be used for hash link
     * Note: It is case-insensitive and will be converted to lowercase
     */
    id?: string;
    className?: string;

    /**
     * If true, the section will not be considered as an article and won't have the article styles
     */
    isNotArticle?: boolean;
}

export function Section({ id, children, className, isNotArticle }: SectionProps) {
    // TODO: [0] Do or comment> const [headChild, ...restChildren] = children;

    id = id?.toLocaleLowerCase();

    return (
        <div
            className={classNames(isNotArticle ? undefined : articleStyles.Article, styles.section, className)}
            {...{ id }}
        >
            {/* [0] <a href={`#${id}`}>{headChild}</a>{restChildren}*/}
            {children}
        </div>
    );
}
