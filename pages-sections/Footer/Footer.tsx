import { DisplayOn } from '../../components/DisplayOn/DisplayOn';
import { version } from '../../package.json';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <DisplayOn desktop tablet>
                    <li>© 2020 — {new Date().getFullYear()} Pavol Hejný</li>
                </DisplayOn>
                <DisplayOn mobile>
                    <li>© Pavol Hejný</li>
                </DisplayOn>
                <li className="left">
                    <a href="#!!!">Hello</a>
                </li>
                <li className="left">
                    <a href="#!!!">Hello</a>
                </li>
                <DisplayOn desktop tablet>
                    <li className="left">
                        <a href="#!!!">Hello</a>
                    </li>
                </DisplayOn>
                <DisplayOn desktop tablet>
                    <li className="left">v{version}</li>
                </DisplayOn>
            </ul>
        </div>
    );
}

/**
 * TODO: !!! Use meaningfully OR remove </DisplayOn> OR 👀 remake to classes .desktop .mobile .tablet ...
 * TODO: !!! Make meaningfull footer
 * TODO: !!! Style
 * TODO: Link to MidJourney + * generated with MidJourney
 * TODO: Link to GitHub
 */
