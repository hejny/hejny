import { PropsWithChildren } from 'react';
import styles from './Service.module.css';

export function Service({ title, children }: PropsWithChildren<{ title: string }>) {
    return (
        <div className={styles.service}>
            <div className={styles['image-container']}>{children}</div>
            <div className={styles.title}>{title}</div>
        </div>
    );
}
