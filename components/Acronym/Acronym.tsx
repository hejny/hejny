import styles from './Acronym.module.css';

interface AcronymProps {
    children: string;
}

export function Acronym(props: AcronymProps) {
    const { children } = props;
    return <span className={styles.acronym}>{children}</span>;
}
