import { PropsWithChildren } from 'react';
import styles from './Item.module.css';

export function Item({ title, children }: PropsWithChildren<{ title: string }>) {
    return (
        <div className={styles.item}>
            <div className={styles['image-container']}>{children}</div>
            <div className={styles.title}>{title}</div>
        </div>
    );
}
