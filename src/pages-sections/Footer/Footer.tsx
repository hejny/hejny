import Link from 'next/link';
import { version } from '../../../package.json';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>
                    © {new Date().getFullYear()} <a href="https://pavolhejny.com">Pavol Hejný</a>
                </li>

                <li>
                    <Link href="https://blog.pavolhejny.com">Blog</Link>
                </li>

                <li>
                    <Link href="/gallery">Used images</Link>
                </li>

                <li>
                    <Link href="/contact/">Contact</Link>
                </li>

                <li>
                    <a href="https://github.com/hejny/rapid-prototyping-wizard/">v{version}</a>
                </li>
            </ul>
        </div>
    );
}

/**
 * TODO: Use meaningfully OR remove </DisplayOn> OR 👀 remake to classes .desktop .mobile .tablet ...

 * TODO: Link to MidJourney + * generated with MidJourney
 * TODO: Link to GitHub
 */
