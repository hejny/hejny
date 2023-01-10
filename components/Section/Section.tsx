import { ReactFragment } from 'react';
import { classNames } from '../../utils/classNames';
import styles from './Section.module.css';

interface SectionProps {
    children: ReactFragment;
    id: string;
    className?: string;
}

export function Section({ id, children, className }: SectionProps) {
    const [headChild, ...restChildren] = children;

    return (
        <div id={id} className={classNames(styles.section, className)}>
            <a href={`#${id}`}>{headChild}</a>
            {restChildren}
        </div>
    );
}
