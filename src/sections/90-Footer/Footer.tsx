import Link from 'next/link';
import styles from './Footer.module.css';

export function FooterSection() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>© {new Date().getFullYear()}</li>

                {/*
                <li>
                    <Link href="https://pavolhejny.com">Pavol Hejný</Link>
                </li>
                */}

                <li>
                    <Link href="/">Home</Link>
                </li>

                {/*
                <li>
                    <Link href="https://blog.pavolhejny.com">Blog</Link>
                </li>
                */}

                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>

                <li>
                    <Link href="/contact/">Contact</Link>
                </li>

                {/*
                <li>
                    <a href="https://github.com/hejny/rapid-prototyping-wizard/">v{VERSION}</a>
                </li>
                */}
            </ul>
        </div>
    );
}

/**
 * TODO: Use meaningfully OR remove </DisplayOn> OR 👀 remake to classes .desktop .mobile .tablet ...

 * TODO: Link to MidJourney + * generated with MidJourney
 * TODO: Link to GitHub
 */