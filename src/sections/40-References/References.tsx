import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import bobKartous from '../../../public/people/bob-kartous.transparent.png';
import janSedo from '../../../public/people/jan-sedo.transparent.png';
import maxKozlov from '../../../public/people/max-kozlov.transparent.cropped.png';
import tomasStudenik from '../../../public/people/tomas-studenik.transparent.png';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { Translate } from '../../components/Translate/Translate';
import styles from './References.module.css';

interface ReferencesProps {
    variant: 'SHORT' | 'FULL';
}

export function ReferencesSection(props: ReferencesProps) {
    const { variant } = props;

    const { t } = useTranslation('references');

    return (
        <Section id="references" className={styles.references}>
            <h2>References</h2>

            <Items>
                <Shuffle
                    /* TODO: !!! Bring back when ShuffleSeedContext provider is working> seed="references" */ seed={new Date().getUTCMinutes()}
                    limit={variant === 'FULL' ? Infinity : 3}
                >
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
                            <Link href="https://www.tomas-studenik.com/" target={'_blank'}>
                                Tomáš Studeník
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <Translate locale="en">
                                <p>
                                    I&apos;ve known Pavol for six years. Especially from hackathons and other innovation
                                    projects. If you are with his team, you can bet he&apos;ll be in the top three. And
                                    you would have right!
                                </p>
                                <p>
                                    Pavol is an innovator who knows the latest technologies and can find quick solutions
                                    to challenges in industry, education and urban development. He&apos;s capable of
                                    making a difference within 24 hours. He is one of the top 10 people in the country
                                    for rapid prototyping applications.
                                </p>
                            </Translate>

                            <Translate locale="cs">
                                <p>
                                    Pavola znám už 6 let. Zejména z hackathonů a dalších inovačních projektů. Pokud se
                                    se svým týmem zúčastnil, mohli byste si vsadit, že bude mezi nejlepšími třemi. A
                                    měli byste pravdu!
                                </p>
                                <p>
                                    Pavol je inovátor, který se orientuje v nejnovějších technologiích a dokáže nacházet
                                    rychlá řešení výzev v průmyslu, vzdělávání či rozvoji měst. Dokáže během 24 hodin
                                    postavit funkční aplilkaci. Je jedním z top 10 lidí v Česku na rychlé prototypování
                                    aplikací.
                                </p>
                            </Translate>

                            {/*
                             Original Version:

                                Pavola znám už 6 let. Zejména z hackathonů a dalších inovačních projektů. Pokud se se
                                svým týmem zúčastnil, mohli byste si vsadit, že bude mezi nejlepšími třemi. A měli byste
                                pravdu.

                                Pavol je softwarový inovátor, který se orientuje v nejnovějších technologiích a dokáže
                                nacházet rychlá řešení výzev v průmyslu, vzdělávání či rozvoji měst. Dokáže během 24
                                hodin postavit funkční aplilkaci, ...

                                Je jedním z top 10 lidí v Česku na rychlé prototypování aplikací.

                                IT je pro něj nejen denním chlebíčkem, ale také životním koníčkem.
                             
                             */}
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
                            <Link href="http://www.jansedo.cz/" target={'_blank'}>
                                Jan Šedo
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <Translate locale="en">
                                <p>
                                    Pavol prototyped our H-edu app so that we got immediate investment. He then designed
                                    the architecture of the system and the use of the technology, which in the test of
                                    time proved to be the right choice for our purposes. At the beginning of the covid,
                                    he responded very well to teachers teaching needs and in record time created exactly
                                    the solution that that thousands of teachers have subsequently used.
                                </p>
                                {/* TODO: !!! Better translation for en */}
                            </Translate>
                            <Translate locale="cs">
                                <p>
                                    Pavol vytvořil prototyp naší aplikace H-edu tak, že jsme okamžitě získali investici.
                                    Následně navrhl architekturu systému a využití technologií, které se v testu času
                                    ukázaly jako správně zvolené pro naše účely. Na začátku covidu výborně zareagoval na
                                    potřeby učitelů při výuce a v rekordním čase vytvořil přesně takové řešení, které
                                    následně využívaly tisíce učitelů.
                                </p>
                            </Translate>
                            {/*
                             Original Version:

                               Pavol vytvořil prototyp naší aplikace H-edu tak, že jsme okamžitě získali investici.
                                Následně navrhl architekturu systému a využití technologií, které se v testu času
                                ukázaly jako správně zvolené pro naše účely. Na začátku covidu výborně zareagoval na
                                potřeby učitelů při výuce a v rekordním čase vytvořil přesně takové řešení, které
                                následně využívaly tisíce učitelů.

                            */}
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
                            <Link href="https://www.linkedin.com/in/themaxkozlov" target={'_blank'}>
                                Max Kozlov
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <Translate locale="en">
                                <p>
                                    Pavol is an absolute beast when it comes to creating digital products. I&apos;ve
                                    seen him - literally overnight - create an integrated chatbot that won us the 1st
                                    place at Startup Weekend Prague.
                                </p>
                                <p>
                                    He learns any topic or technology quickly and builds even faster, with exceptional
                                    usability.
                                </p>
                                <p>
                                    I&apos;d recommend Pavol to everyone who wants to see real life results in a
                                    manageable time frame. Plus he&apos;s really considerate, kind and a pleasure to
                                    work with.
                                </p>
                            </Translate>
                            <Translate locale="cs">
                                <p>
                                    Pavol je naprostá bestie, pokud jde o vytváření digitálních produktů. Viděl jsem ho
                                    - doslova přes noc - vytvořit integrovaného chatbota, který nám vyhrál 1. místo na
                                    Startup Weekendu Praha.
                                </p>
                                <p>
                                    Rychle se naučí jakékoliv téma nebo technologii a ještě rychleji staví, a to s
                                    výjimečnou použitelností.
                                </p>
                                <p>
                                    Pavla bych doporučil všem, kteří chtějí vidět reálné výsledky v přijatelném čase.
                                    Navíc je opravdu ohleduplný, milý a je radost s ním pracovat.
                                </p>
                                {/* TODO: !!! Better translation for cs  */}
                            </Translate>
                            {/*
                             Original Version:

                                Pavol is an absolute beast when it comes to creating digital products. I’ve seen him - literally overnight - create an integrated chatbot that won us the 1st place at Startup Weekend Prague.

                                He learns any topic or technology quickly and builds even faster, with exceptional usability.

                                I’d recommend Pavol to everyone who wants to see real life results in a manageable time frame. Plus he’s really considerate, kind and a pleasure to work with.

                            */}
                        </Item.Description>
                    </Item>

                    <Item>
                        <Item.PersonImage>
                            <Image
                                // TODO: !!! Ask Bob or Bohumil
                                alt="Portrait photo of Bohumil Kartous"
                                src={bobKartous}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <Link href="https://www.linkedin.com/in/bob-kartous-5b472526/" target={'_blank'}>
                                Bohumil Kartous
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <Translate locale="en">
                                <p>
                                    Regarding mu personal, professional experience, Pavol is highly capable innovator
                                    who&apos;s potential range across digital technologies and socially prioritized
                                    themes. In projects collaborated on, he brought new visions and approaches to the
                                    world of education. I am convinced that he is ready to replicate it wherever it will
                                    make sense.
                                </p>
                            </Translate>
                            <Translate locale="cs">
                                <p>
                                    Pokud jde o jeho osobní a profesní zkušenosti, Pavol je velmi schopný inovátor,
                                    jehož potenciál sahá napříč digitálními technologiemi a společensky prioritními
                                    tématy. V projektech, na kterých spolupracoval, přinesl do světa vzdělávání nové
                                    vize a přístupy. Jsem přesvědčen, že je připraven je replikovat všude tam, kde to
                                    bude mít smysl.
                                    {/* TODO: !!! Better translation for cs  */}
                                </p>
                            </Translate>
                            {/*
                             Original Version:

                             Regarding mu personal, professional experience, Pavol is highly capable innovator who’s potential range across digital technologies and socially prioritized themes. In projects collaborated on, he brought new visions and approaches to the world of education. I am convinced that he is ready to replicate it wherever it will make sense.


                            */}
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
                            <Link href="http://www.xxxxx.cz/" target={'_blank'}>
                                Xxxx Xxxx
                            </Link>
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
                    {t('more-references')}
                </Link>
            )}
        </Section>
    );
}

/**
 * TODO: !!! /references page with more button from main page
 * TODO: !!! Add job title on references
 * TODO: !!! Add all other people
 * TODO: Add links to multiple socials
 * TODO: Shadow effect on pictures
 * TODO: Paralax effect on people
 */
