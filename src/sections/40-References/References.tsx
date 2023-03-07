import Image from 'next/image';
import Link from 'next/link';
import tomasStudenik from '../../../public/reference/tomas-studenik.jpg';
import personPlaceholder from '../../../public/services/presentation-2.jpg';
import { Item } from '../../components/Items/Item';
import { Items } from '../../components/Items/Items';
import { Section } from '../../components/Section/Section';
import { Shuffle } from '../../components/Shuffle/Shuffle';
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
                            <p>
                                I&apos;ve known Pavol for six years. Especially from hackathons and other innovation
                                projects. If you are with his team, you can bet he&apos;ll be in the top three. And you
                                would have right!
                            </p>
                            <p>
                                Pavol is an innovator who knows the latest technologies and can find quick solutions to
                                challenges in industry, education and urban development. He&apos;s capable of making a
                                difference within 24 hours. He is one of the top 10 people in the country for rapid
                                prototyping applications.
                            </p>

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
                                alt="Portrait photo of Tomáš Studeník"
                                src={personPlaceholder}
                                draggable="false"
                                placeholder="blur"
                            />
                        </Item.PersonImage>
                        <Item.Title>
                            <Link href="https://www.tomas-studenik.com/" target={'_blank'}>
                                Jan Novák
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <p>
                                Pavola znám už 6 let. Zejména z hackathonů a dalších inovačních projektů. Pokud se se
                                svým týmem zúčastnil, mohli byste si vsadit, že bude mezi nejlepšími třemi. A měli byste
                                pravdu!
                            </p>
                            <p>
                                Pavol je inovátor, který se orientuje v nejnovějších technologiích a dokáže nacházet
                                rychlá řešení výzev v průmyslu, vzdělávání či rozvoji měst. Dokáže během 24 hodin
                                postavit funkční aplilkaci. Je jedním z top 10 lidí v Česku na rychlé prototypování
                                aplikací.
                            </p>
                        </Item.Description>
                    </Item>

                    {/* TODO: !!! Reference from person 2 */}
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
