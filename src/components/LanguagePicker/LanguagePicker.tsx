import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cs from '../../../public/languages/cs.svg';
import en from '../../../public/languages/en.svg';
import styles from './LanguagePicker.module.css';

export function LanguagePicker() {
    const router = useRouter();

    return (
        <div className={styles.LanguagePicker}>
            <div>
                <Link href={router.pathname} locale="en">
                    <Image className={styles.language} src={en} alt="Switch to English" title="🇺🇸 Switch to English" />
                </Link>

                <Link href={router.pathname} locale="cs">
                    <Image
                        className={styles.language}
                        src={cs}
                        alt="Přepnout do Češtiny"
                        title="🇨🇿 Přepnout do Češtiny"
                    />
                </Link>
            </div>
        </div>
    );
}

/**
 * !!! Make active
 */
