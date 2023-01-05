import { PropsWithChildren } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Section.module.css';

export function Section({ id, children, className }: PropsWithChildren<{ id: string; className?: string }>) {
    return (
        <div id={id} className={classNames(styles.section, className)}>
            {children}
        </div>
    );
}
