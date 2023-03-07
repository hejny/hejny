import Image from 'next/image';
import Link from 'next/link';
import cs from '../../../public/languages/cs.svg';
import en from '../../../public/languages/en.svg';
import styles from './LanguagePicker.module.css';

interface LanguagePickerProps {}

export function LanguagePicker(props: LanguagePickerProps) {
    const {} = props;
    return (
        <div className={styles.LanguagePicker}>
            <div>
                <Link href="?language=en">
                    <Image className={styles.language} src={en} alt="Switch to English" title="🇺🇸 Switch to English" />
                </Link>

                <Link href="?language=cs">
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
