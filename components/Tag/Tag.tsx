import styles from './Tag.module.css';

interface TagProps {
    children: string;
}

export function Tag(props: TagProps) {
    const { children } = props;
    return <span className={styles.tag}>{children}</span>;
}
