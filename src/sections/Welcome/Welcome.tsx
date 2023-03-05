import Link from 'next/link';
import { ReactNode } from 'react';
import { Section } from '../../components/Section/Section';
import styles from './Welcome.module.css';

interface WelcomeProps {
    children?: ReactNode;
}

export function WelcomeSection(props: WelcomeProps) {
    const { children } = props;

    return (
        <Section id="welcome" className={styles.welcome}>
            <Link href="/">
                <h1>From 0 to 1</h1>
            </Link>

            {children}
        </Section>
    );
}

/**
 * TODO: Maybe use <Shuffle> for technologies
 */
