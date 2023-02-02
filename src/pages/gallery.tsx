import { Inter } from '@next/font/google';
import Head from 'next/head';
import { Vector } from 'xyzt';
import { CaveOfIdeasInLightbulbWithTransparentLookThr_d3273ad0_Image } from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3_Image';
import { CaveOfIdeasWithTransparentLookThrough_fe3480c5_Image } from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_with_transparent_look_through_fe3480c5-76af-45da-ac4e-5177062bcb6b_Image';
import { CaveWithPresentation_dec31ff2_Image } from '../../public/wallpapers/Pavol_Hejn_cave_with_presentation_dec31ff2-3b9d-42b9-b84f-f87d02d6a391_Image';
import { CaveWithPrototypingLaboratory_ca9b82b9_Image } from '../../public/wallpapers/Pavol_Hejn_cave_with_prototyping_laboratory_ca9b82b9-0ded-44a3-b7ec-344ebb539439_Image';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { ImagineTag } from '../components/ImagineTag/ImagineTag';
import { Item } from '../components/Items/Item';
import { Items } from '../components/Items/Items';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { CaveSection } from '../sections/Cave/Cave';
import { FooterSection } from '../sections/Footer/Footer';
import { HeadSection } from '../sections/HeadSection/HeadSection';
import { WelcomeSection } from '../sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Midjourney() {
    return (
        <>
            <Head>
                <HeadSection subtitle="Gallery" />
            </Head>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    <CaveSection />
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    <WelcomeSection /> {/* <- TODO: Children here */}
                    <Items itemsOnRow={2}>
                        <a
                            href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Item>
                                <Item.Image>
                                    <CaveOfIdeasWithTransparentLookThrough_fe3480c5_Image />
                                </Item.Image>
                                <Item.Description>
                                    <ImagineTag>Cave of ideas with transparent look through</ImagineTag>
                                </Item.Description>
                            </Item>
                        </a>

                        <a
                            href="https://www.midjourney.com/app/jobs/d3273ad0-097f-4011-b799-1c379bb05ee3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Item>
                                <Item.Image>
                                    <CaveOfIdeasInLightbulbWithTransparentLookThr_d3273ad0_Image />
                                </Item.Image>
                                <Item.Description>
                                    <ImagineTag>Cave of ideas in lightbulb</ImagineTag>
                                </Item.Description>
                            </Item>
                        </a>
                        <a
                            href="https://www.midjourney.com/app/jobs/dec31ff2-3b9d-42b9-b84f-f87d02d6a391"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Item>
                                <Item.Image>
                                    <CaveWithPresentation_dec31ff2_Image />
                                </Item.Image>
                                <Item.Description>
                                    <ImagineTag>Cave with presentation</ImagineTag>
                                </Item.Description>
                            </Item>
                        </a>
                        <a
                            href="https://www.midjourney.com/app/jobs/ca9b82b9-0ded-44a3-b7ec-344ebb539439"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Item>
                                <Item.Image>
                                    <CaveWithPrototypingLaboratory_ca9b82b9_Image />
                                </Item.Image>
                                <Item.Description>
                                    <ImagineTag>Cave with prototyping laboratory</ImagineTag>
                                </Item.Description>
                            </Item>
                        </a>
                    </Items>
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

/**
 * TODO: Make some menu
 * TODO: !!! Link to main homepage
 * TODO: [🧈] Best way how to share page css
 * TODO: DRY with index.tsx
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 * TODO: Generate the components like <CaveOfIdeasWithTransparentLookThroughImageXfe3480c5 /> with links
 */
