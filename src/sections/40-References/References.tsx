import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import bobKartous from '../../../public/people/bob-kartous-transparent.png';
import janSedo from '../../../public/people/jan-sedo-transparent.png';
import maxKozlov from '../../../public/people/max-kozlov-transparent.png';
import terezaTexlova from '../../../public/people/tereza-texlova-transparent.png';
import tomasStudenik from '../../../public/people/tomas-studenik-transparent.png';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import styles from './References.module.css';

interface ReferencesProps {
    variant: 'SHORT' | 'FULL';
}

export function ReferencesSection(props: ReferencesProps) {
    const { variant } = props;

    const { t } = useTranslation();

    return (
        <Section id="References" className={styles.ReferencesSection}>
            <h2>{t('References.title')}</h2>

            <Items>
                <Shuffle seed="references" limit={variant === 'FULL' ? Infinity : 3} isDisabled>
                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Tomáš Studeník"
                                src={tomasStudenik}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a href="https://www.tomas-studenik.com/" target="_blank" rel="noreferrer">
                                {t('References.tomas-studenik.name')}
                            </a>
                        </Item.Title>
                        <Item.Subtitle>{t('References.tomas-studenik.position')}</Item.Subtitle>
                        <Item.Description>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {t('References.tomas-studenik.content')}
                            </div>
                        </Item.Description>
                    </Item>

                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Jan Šedo"
                                src={janSedo}
                                // TODO: [🧑] Make some <ImageGravatar component; This is jan.sedo@h-mat.cz
                                //src="https://www.gravatar.com/avatar/0879e2d2136c90854d7c52adc712e915?s=1024"
                                // width={1024}
                                // height={1024}
                                draggable="false"
                                placeholder="blur"
                                style={{
                                    // TODO: [💫] What is the propper place for this radial-gradient, in JSX or in CSS module + DRY
                                    backgroundImage: 'radial-gradient(circle at center, #b4952c 0%, #000000 120%)',
                                }}
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a href="http://www.jansedo.cz/" target="_blank" rel="noreferrer">
                                {t('References.jan-sedo.name')}
                            </a>
                        </Item.Title>
                        <Item.Subtitle>{t('References.jan-sedo.position')}</Item.Subtitle>
                        <Item.Description>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {t('References.jan-sedo.content')}
                            </div>
                        </Item.Description>
                    </Item>

                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Max Kozlov"
                                src={maxKozlov}
                                draggable="false"
                                placeholder="blur"
                                style={{
                                    // TODO: [💫] What is the propper place for this radial-gradient, in JSX or in CSS module + DRY
                                    backgroundImage: 'radial-gradient(circle at center, #b4952c 0%, #000000 120%)',
                                }}
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a href="https://www.linkedin.com/in/themaxkozlov" target="_blank" rel="noreferrer">
                                {t('References.max-kozlov.name')}
                            </a>
                        </Item.Title>
                        <Item.Subtitle>{t('References.max-kozlov.position')}</Item.Subtitle>
                        <Item.Description>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {t('References.max-kozlov.content')}
                            </div>
                        </Item.Description>
                    </Item>

                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Bob Kartous"
                                src={bobKartous}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a
                                href="https://www.linkedin.com/in/bob-kartous-5b472526/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('References.bob-kartous.name')}
                            </a>
                        </Item.Title>
                        <Item.Subtitle>{t('References.bob-kartous.position')}</Item.Subtitle>
                        <Item.Description>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {t('References.bob-kartous.content')}
                            </div>
                        </Item.Description>
                    </Item>

                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Tereza Texlová"
                                src={terezaTexlova}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a href="https://www.linkedin.com/in/tereza-texlova/" target="_blank" rel="noreferrer">
                                {t('References.tereza-texlova.name')}
                            </a>
                        </Item.Title>
                        <Item.Subtitle>{t('References.tereza-texlova.position')}</Item.Subtitle>
                        <Item.Description>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {t('References.tereza-texlova.content')}
                            </div>
                        </Item.Description>
                    </Item>
                    {/*
                    <Item>
                        <Item.PersonImage>
                            <Image
                                alt="Portrait photo of Xxx Xxx"
                                src={xxxXxx}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <a href="http://www.xxxxx.cz/" target="_blank" rel="noreferrer">
                                Xxxx Xxxx
                            </a>
                        </Item.Title>
                        <Item.Description>
                            <Translate locale="en">
                                <p>
                                    xxxx
                                </p>
                            </Translate>
                            <Translate locale="cs">
                                <p>
                                    xxxx
                                </p>
                            </Translate>
                            {/*
                             Original Version:


                            * /}
                        </Item.Description>
                    </Item>
                    */}
                </Shuffle>
            </Items>

            {variant === 'SHORT' && (
                <Link className="button" href="/references">
                    {t('References.more-references')}
                </Link>
            )}
        </Section>
    );
}

/**
 * TODO: !!! Translate all references
 * TODO: !!! Add position and organization of references
 * TODO: !!! Add organization and position of referees
 * TODO: !!! Add Daria and Bronwyn
 * TODO: !!! Link to LinkedIn
 * TODO: ! Add active links
 * TODO: !!?? Add job title on references
 * TODO: ! Add all other people
 * TODO: ! Add links to multiple socials
 * TODO: !!! Add Daria and Bronwyn
 */
