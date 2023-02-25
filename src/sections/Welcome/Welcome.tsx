import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import logo from '../../../public/logo/logo.svg';
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
                <h1>
                    <Image alt="From 0 to 1" src={logo} />
                </h1>
            </Link>

            {children}
        </Section>
    );
}

/**
 * TODO: Maybe use <Shuffle> for technologies
 */
