import Image from 'next/image';
import { Section } from '../../components/Section/Section';
import styles from './Contact.module.css';

export function Contact() {
    return (
        <Section id="contact">
            <h2>Contact me!</h2>

            <div className={styles.vcard}>
                <Image
                    src="https://www.gravatar.com/avatar/10bceb8965947164502b4e7b3314733d?s=512"
                    width={200}
                    height={200}
                    alt="Pavol Hejný"
                />

                <ul>
                    <li>
                        <a href="mailto:me@pavolhejny.com">pavol@hejny.org</a>
                    </li>
                    <li>
                        <a href="https://github.com/hejny/">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/hejny/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/hejny">Facebook</a>
                    </li>
                    <li>
                        <a href="https://m.me/hejny">Messenger</a>
                    </li>
                    <li>
                        <a href="/documents/contact.html">…More contacts…</a>
                    </li>
                </ul>
            </div>
        </Section>
    );
}

/**
 * TODO: !!! Style
 */
