import Image from 'next/image';
import { Section } from '../../components/Section/Section';
import styles from './PavolHejny.module.css';

interface PavolHejnyProps {
    variant: 'SHORT' | 'FULL';
}

export function PavolHejnySection(props: PavolHejnyProps) {
    const { variant } = props;

    return (
        <Section id="pavolhejny" className={styles.about}>
            <h2>Who I am?</h2>

            <Image
                alt="Portrait photo of Pavol Hejný"
                src="https://www.gravatar.com/avatar/10bceb8965947164502b4e7b3314733d?s=1024"
                width={250}
                height={250}
                draggable="false"
                placeholder="blur"
            />

            <p>
                Hi, I am Pavol, a developer and tech enthusiast passionate about exploring cutting-edge tools and
                technologies. As a co-founder of{' '}
                <a href="https://www.h-edu.cz/" target="_blank" rel="noreferrer">
                    H-edu
                </a>{' '}
                and{' '}
                <a href="https://collboard.com/" target="_blank" rel="noreferrer">
                    Collboard
                </a>
                , I&apos;m invested in using digital innovation to transform education.
            </p>
            <p>
                I&apos;ve developed several citizen science projects, including the first mobile app for birdwatchers in
                the Czech Republic, and spoken at tech and startup conferences on topics like VR, AR, and AI.
            </p>
            <p>
                I also run{' '}
                <a href="https://czech.events/" target="_blank" rel="noreferrer">
                    Czech.events
                </a>
                , a platform that helps people find and attend technology and innovation events. My talent for
                identifying opportunities for growth and mentoring startups has led me to win several innovation
                competitions. I&apos;m committed to inspiring others and believe technology can help solve the
                world&apos;s problems.
            </p>
        </Section>
    );
}

/**
 * TODO: Add dynamically from https://raw.githubusercontent.com/hejny/hejny/main/documents/contact.md
 *       1) Download from external repo script (and add copy warning)
 *       2) Convert from local markdown to conponent
 *       3) Add also VCard
 *       4) Add also crypto
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
