import Image from 'next/image';
import Link from 'next/link';
import tomasStudenik from '../../../public/reference/tomas-studenik.jpg';
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
                <Shuffle seed="references">
                    <Item>
                        <Item.PersonImage>
                            <Image alt="Tomáš Studeník" src={tomasStudenik} />
                        </Item.PersonImage>
                        <Item.Title>
                            <Link href="https://www.tomas-studenik.com/" target={'_blank'}>
                                Tomáš Studeník
                            </Link>
                        </Item.Title>
                        <Item.Description>
                            <p>
                                Pavola znám už 6 let. Zejména z hackathonů a dalších inovačních projektů. Pokud se se
                                svým týmem zúčastnil, mohli byste si vsadit, že bude mezi nejlepšími třemi. A měli byste
                                pravdu.
                            </p>
                            <p>
                                Pavol je softwarový inovátor, který se orientuje v nejnovějších technologiích a dokáže
                                nacházet rychlá řešení výzev v průmyslu, vzdělávání či rozvoji měst. Dokáže během 24
                                hodin postavit funkční aplilkaci, ...
                            </p>
                            <p>Je jedním z top 10 lidí v Česku na rychlé prototypování aplikací.</p>
                            <p>IT je pro něj nejen denním chlebíčkem, ale také životním koníčkem. </p>
                        </Item.Description>
                    </Item>
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
