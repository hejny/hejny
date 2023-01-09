import { DisplayOn } from '../DisplayOn/DisplayOn';
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
            </ul>
        </div>
    );
}

/**
 * TODO: !!! Make meaningfull footer
 * TODO: !!! Dynamic year in copyright
 * TODO: !!! Link to MidJourney
 * TODO: !!! Link to GitHub
 */
