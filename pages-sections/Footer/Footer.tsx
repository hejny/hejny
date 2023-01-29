import { version } from '../../package.json';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>
                    © {new Date().getFullYear()} <a href="https://pavolhejny.com">Pavol Hejný</a>
                </li>

                <li>
                    <a href=" https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b">*MidJourney</a>
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
