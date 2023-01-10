import { Fragment } from 'react';
import styles from './Acronym.module.css';

interface AcronymProps {
    children: string;
}

export function Acronym(props: AcronymProps) {
    const { children } = props;

    const words = children.split(' ');

    return (
        <span className={styles.acronym}>
            {words.map((word, i) => {
                const initialLetter = word.substring(0, 1);
                const restLetters = word.substring(1);

                return (
                    <Fragment key={i}>
                        <span className={styles.initial}>{initialLetter}</span>
                        <span className={styles.rest}>{restLetters}</span>
                        {` `}
                    </Fragment>
                );
            })}
        </span>
    );
}
