import styles from './Items.module.css';

export function Items({ children }: PropsWithChildren<{}>) {
    return <div className={styles.items}>{children}</div>;
}
