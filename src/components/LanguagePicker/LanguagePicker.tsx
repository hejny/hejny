import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import csFlag from '../../../public/languages/cs.svg';
import enFlag from '../../../public/languages/en.svg';
import styles from './LanguagePicker.module.css';

export function LanguagePicker() {
    const router = useRouter();

    return (
        <div className={styles.LanguagePicker}>
            <div>
                <Link href={router.pathname} locale="en" scroll={false}>
                    <Image
                        className={styles.language}
                        src={enFlag}
                        alt="Switch to English"
                        title="🇺🇸 Switch to English"
                    />
                </Link>

                <Link href={router.pathname} locale="cs" scroll={false}>
                    <Image
                        className={styles.language}
                        src={csFlag}
                        alt="Přepnout do Češtiny"
                        title="🇨🇿 Přepnout do Češtiny"
                    />
                </Link>
            </div>
        </div>
    );
}

/**
 * TODO: Probbably rename to <LanguageSwitcher (@see https://dev.to/adrai/static-html-export-with-i18n-compatibility-in-nextjs-8cd)
 */
