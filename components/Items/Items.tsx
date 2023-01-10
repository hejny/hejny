import { ReactFragment } from 'react';
import styles from './Items.module.css';

interface ItemsProps {
    children: ReactFragment;
}

export function Items({ children }: ItemsProps) {
    return <div className={styles.items}>{children}</div>;
}

/**
 * TODO: !!! Hover of links
 */
