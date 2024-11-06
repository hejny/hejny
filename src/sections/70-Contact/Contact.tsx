import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import pavolHejny from '../../../public/services/prototyping-1.jpg';
import { Article } from '../../components/Article/Article';
import { BookingCalendar } from '../../components/BookingCalendar/BookingCalendar';
import { Section } from '../../components/Section/Section';
import styles from './Contact.module.css';

interface ContactProps {
    variant: 'SHORT' | 'FULL';
}

export function ContactSection(props: ContactProps) {
    const { variant } = props;

    const { t } = useTranslation();

    return (
        <Section id="Contact" className={styles.Contact}>
            <h2>{t('Contact.title')}</h2>

            <Article content={t('Contact.content')} isEnhanced />

            <div className={styles.vcard}>
                <Image
                    // TODO: ! Bottom out centered image
                    // TODO: Do we need to i18n alt of images?
                    alt="Portrait photo of Pavol Hejný looking behind of 3D printer"
                    src={pavolHejny}
                    width={200}
                    height={200}
                    draggable="false"
                    placeholder="blur"
                />

                <ul>
                    <li>
                        <a href="mailto:pavol@hejny.org">Email</a>
                    </li>
                    <li>
                        <a href="https://github.com/hejny/">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/hejny/">LinkedIn</a>
                    </li>

                    <li>
                        <a href="https://m.me/hejny">Messenger</a>
                    </li>

                    {variant === 'FULL' && (
                        <>
                            <li>
                                <a href="https://t.me/hejny">Telegram</a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/hejny">Facebook</a>
                            </li>
                            <li>
                                <a href="https://instagram.com/pavolhejny/">Instagram</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/pavolhejny">Twitter</a>
                            </li>
                            <li>
                                <a href="https://blog.pavolhejny.com">Blog</a>
                            </li>
                            <li>
                                <a href="https://cal.com/hejny/meet">Booking calendar</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1M0Py3W4eul8WMfzlvlHHBs50tP2hQ1f519QomfAOhcM/edit?usp=sharing">
                                    CV
                                </a>
                            </li>
                            <li>
                                <a href="https://www.blockchain.com/btc/address/bc1qyuy7j80lxepv2wjdvflgajyatpmyqkmc75spvq">
                                    Bitcoin
                                </a>
                            </li>
                            <li>
                                <a href="https://etherscan.io/address/0x1640d8BeACC8F011f820EaCC83A5d327a70e95CA">
                                    Ethereum
                                </a>
                            </li>
                            <li>
                                <a href="https://cardanoscan.io/address/01dfdb2955f8f1c2b4306cec5502e8ebfd9dac5dcbc62a39fe007c866fbf916172d3cae24c414197e5e4095864af8530586adcfdf5153866e6">
                                    Cardano
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hejny/hejny/blob/main/documents/crypto.md">More crypto</a>
                            </li>
                        </>
                    )}

                    {variant === 'SHORT' && (
                        <li>
                            <Link href="/contact">{t('Contact.more')}</Link>
                        </li>
                    )}
                </ul>
            </div>

            <form is="contact-form">
                <label>
                    <p>Jméno:</p>
                    <input name="name" placeholder="Vaše jméno" type="text" />
                </label>
                <label>
                    <p>Email:</p>
                    <input name="email" placeholder="jan.novak@seznam.cz" type="email" />
                </label>
                <label>
                    <p>Telefonní číslo:</p>
                    <input name="phone" placeholder="+420123456789" type="tel" />
                </label>
                <label>
                    <p>Zájem o školení na téma:</p>
                    <select name="variant">
                        <option value="Varianta 1: Vývoj pomocí AI">Varianta 1: Vývoj pomocí AI</option>
                        <option value="Varianta 2: Vývoj AI aplikací">Varianta 2: Vývoj AI aplikací</option>
                    </select>
                </label>
                <label>
                    <p>Zpráva:</p>
                    <textarea name="message" placeholder="Můžete nám napsat jaké jsou vaše požadavky"></textarea>
                </label>
                <label>
                    <input type="submit" value="Odeslat" />
                </label>
            </form>

            <BookingCalendar />
            {/* <iframe title="Book meeting in calendar" src="https://cal.com/hejny/meet" /> */}
        </Section>
    );
}

/**
 * TODO: ! Better footer with - links, form, contact, subscribe, legal (address, Datovka 3te6yxg), copyright, technical
 * TODO: ! Contact form
 * TODO: Add dynamically from https://raw.githubusercontent.com/hejny/hejny/main/documents/contact.md
 *       1) Download from external repo script (and add copy warning)
 *       2) Convert from local markdown to conponent
 *       3) Add also VCard
 *       4) Add also crypto
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
