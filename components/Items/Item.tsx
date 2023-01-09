import { PropsWithChildren } from 'react';
import styles from './Item.module.css';

interface ItemProps {
    title: string;
    description?: string;
}

export function Item({ title, description, children }: PropsWithChildren<ItemProps>) {
    return (
        <div className={styles.item}>
            <div className={styles['image-container']}>{children}</div>
            <div className={styles.title}>{title}</div>
            {description && <div className={styles.description}>{description}</div>}
        </div>
    );
}
