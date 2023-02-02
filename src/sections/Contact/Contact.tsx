import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../../components/Section/Section';
import styles from './Contact.module.css';

interface ContactProps {
    variant: 'SHORT' | 'FULL';
}

export function ContactSection(props: ContactProps) {
    const { variant } = props;
    return (
        <Section id="contact">
            <h2>Get in touch!</h2>

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

                    {variant === 'FULL' && <></>}

                    {variant === 'SHORT' && (
                        <li>
                            <Link href="/contact">More</Link>
                        </li>
                    )}
                </ul>
            </div>
        </Section>
    );
}

/**
 * TODO: !!! Add dynamically from https://raw.githubusercontent.com/hejny/hejny/main/documents/contact.md
 *       1) Download from external repo script (and add copy warning)
 *       2) Convert from local markdown to conponent
 *       3) Add also VCard
 *       4) Add also crypto
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
