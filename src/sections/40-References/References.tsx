import Image from 'next/image';
import Link from 'next/link';
import tomasStudenik from '../../../public/reference/tomas-studenik.jpg';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
import { Translate } from '../../components/Translate/Translate';
import styles from './References.module.css';

export function ReferencesSection() {
    return (
        <Section id="references" className={styles.references}>
            <h2>References</h2>

            <Items>
                <Shuffle seed="references" disable>
                    <Item>
                        <Item.PersonImage>
                            <Image
                                // TODO: !!! Shadow effect on pictures
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
                            <Translate lang="en">
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

                            <Translate lang="cs">
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
                             Full Version:

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
                                // TODO: !!! Shadow effect on pictures
                                alt="Portrait photo of Jan Šedo"
                                src={`http://www.jansedo.cz/fotka.jpg`}
                                width={190}
                                height={299}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <Link href="http://www.jansedo.cz/" target={'_blank'}>
                                Jan Šedo
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <Translate lang="en">
                                <p>
                                    Pavol vytvořil prototyp naší aplikace H-edu tak, že jsme okamžitě získali investici.
                                    Následně navrhl architekturu systému a využití technologií, které se v testu času
                                    ukázaly jako správně zvolené pro naše účely. Na začátku covidu výborně zareagoval na
                                    potřeby učitelů při výuce a v rekordním čase vytvořil přesně takové řešení, které
                                    následně využívaly tisíce učitelů.
                                </p>
                            </Translate>
                            <Translate lang="cs">
                                <p>
                                    Pavol vytvořil prototyp naší aplikace H-edu tak, že jsme okamžitě získali investici.
                                    Následně navrhl architekturu systému a využití technologií, které se v testu času
                                    ukázaly jako správně zvolené pro naše účely. Na začátku covidu výborně zareagoval na
                                    potřeby učitelů při výuce a v rekordním čase vytvořil přesně takové řešení, které
                                    následně využívaly tisíce učitelů.
                                </p>
                            </Translate>
                        </Item.Description>
                    </Item>

                    {/* TODO: !!! Reference from person 3 */}
                </Shuffle>
            </Items>
        </Section>
    );
}

/**
 * TODO: Round people
 * TODO: Ask for reference
 * TODO: Add links to multiple socials
 */
