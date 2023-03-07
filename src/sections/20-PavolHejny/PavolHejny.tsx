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
                src="https://www.gravatar.com/avatar/10bceb8965947164502b4e7b3314733d?s=1024"
                alt="Pavol Hejný"
                width={250}
                height={250}
                draggable="false"
                placeholder="blur"
            />

            {/* TODO: !!! Shorten pavolhejny text */}
            <p>
                I am co-founder of a platform for teachers, <a href="https://www.h-edu.cz/">H-Edu</a>; when the
                quarantine on March 2020 began, he founded an <strong>online virtual board</strong>{' '}
                <a href="https://collboard.com/">
                    <strong>CollBoard.com</strong>
                </a>
                . He worked on several projects of the Czech Ornithological Society(
                <a href="https://www.birdlife.cz/">Česká společnost ornitologická</a>) and in the past, he also
                developed his{' '}
                <a href="https://github.com/townsgame">
                    <strong>online game Towns</strong>
                </a>
                .
            </p>
            <p>
                In terms of community, he has organized several conferences. For example,{' '}
                <a href="https://www.pavolhejny.com/nulty-rocnik-czech-future-tech/">
                    in autumn 2019, he organized the CzechFuture.tech
                </a>
                . He co-organized some hackathons like Educational hackathon or Startup Weekends in Prague.
            </p>
            <p>
                At the same time, he participated in many events and startup competitions as a <strong>mentor</strong>{' '}
                and a <strong>jury</strong>.
            </p>
            <p>
                He has spoken at many conferences such as{' '}
                <a href="https://www.devconf.info/">
                    <strong>DevConf</strong>
                </a>
                <strong>,</strong>{' '}
                <a href="https://www.linuxdays.cz/">
                    <strong>LinuxDays</strong>
                </a>
                <strong>,</strong>{' '}
                <a href="https://www.openalt.cz/">
                    <strong>OpenAlt</strong>
                </a>
                <strong>,</strong>{' '}
                <a href="https://www.facebook.com/czechvrfest/">
                    <strong>Czech VR Fest</strong>
                </a>
                , + many other meetups like <a href="https://www.facebook.com/frontendisti/">Frontendisti</a>,{' '}
                <a href="https://www.facebook.com/itnetworkcz/">ITnetwork.cz</a>,{' '}
                <a href="https://www.facebook.com/jobsdevcz/">Jobs Dev</a>, etc.
            </p>
            <p>
                He has an overview of what is happening in the Czech Republic for IT &amp; startup events. That’s why he
                is sending out a regular monthly email about the most exciting events at{' '}
                <a href="https://czech.events/">Czech.events</a>.
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
