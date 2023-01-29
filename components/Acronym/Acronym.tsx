import styles from './Acronym.module.css';

interface AcronymProps {
    children: string;
}

export function Acronym(props: AcronymProps) {
    const { children } = props;

    const words = children.split(' ');
    const acronym = words
        .map((word, i) => {
            return word.substring(0, 1).toUpperCase();
        })
        .join('');

    return (
        <span className={styles.acronym} title={words.join(' ')}>
            {acronym}
        </span>
    );
}

/**
 * TODO: Better effect here
 */
