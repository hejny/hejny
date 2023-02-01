import { ReactNode } from 'react';
import styles from './Items.module.css';

interface ItemsProps {
    children: ReactNode;
}

export function Items({ children }: ItemsProps) {
    return <div className={styles.items}>{children}</div>;
}
