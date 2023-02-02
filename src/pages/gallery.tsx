import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { CaveOfIdeasInLightbulbWithTransparentLookThr_d3273ad0_Image } from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3_AsImage';
import { CaveWithPresentation_dec31ff2_Image } from '../../public/wallpapers/Pavol_Hejn_cave_with_presentation_dec31ff2-3b9d-42b9-b84f-f87d02d6a391_AsImage';
import { CaveWithPrototypingLaboratory_ca9b82b9_Image } from '../../public/wallpapers/Pavol_Hejn_cave_with_prototyping_laboratory_ca9b82b9-0ded-44a3-b7ec-344ebb539439_AsImage';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { Item } from '../components/Items/Item';
import { Items } from '../components/Items/Items';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { Cave } from '../pages-sections/Cave/Cave';
import { Footer } from '../pages-sections/Footer/Footer';
import { Welcome } from '../pages-sections/Welcome/Welcome';
import styles from './index.module.css';

// TODO: What is this - inter/Inter
const inter = Inter({ subsets: ['latin'] });

export default function Midjourney() {
    return (
        <>
            <Head>
                {/* TODO: DRY with index.tsx - probbably some HeadComponent or getTitle */}
                <title>@@@</title>
                <meta name="description" content="@@@" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    <Cave />
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    <Welcome /> {/* <- TODO: Children here */}
                    <Items>
                        {/* TODO Fix <a> in <a>
                    <Link
                        className={styles.galleryItem}
                        href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b"
                        target="_blank"
                        // TODO: Is rel="noreferrer" added here
                    >
                        <CaveOfIdeasWithTransparentLookThroughImageXfe3480c5 />
                    </Link>
                    */}

                        <Link
                            className={styles.galleryItem}
                            href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b" // <- TODO: Real link here
                            target="_blank"
                            // TODO: Is rel="noreferrer" added here
                        >
                            <Item>
                                <Item.Image>
                                    <CaveOfIdeasInLightbulbWithTransparentLookThr_d3273ad0_Image />
                                </Item.Image>
                                <Item.Description> AA</Item.Description>
                            </Item>
                        </Link>
                        <Link
                            className={styles.galleryItem}
                            href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b" // <- TODO: Real link here
                            target="_blank"
                            // TODO: Is rel="noreferrer" added here
                        >
                            <Item>
                                <Item.Image>
                                    <CaveWithPresentation_dec31ff2_Image />
                                </Item.Image>
                                <Item.Description> AA</Item.Description>
                            </Item>
                        </Link>
                        <Link
                            className={styles.galleryItem}
                            href="https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b" // <- TODO: Real link here
                            target="_blank"
                            // TODO: Is rel="noreferrer" added here
                        >
                            <Item>
                                <Item.Image>
                                    <CaveWithPrototypingLaboratory_ca9b82b9_Image />
                                </Item.Image>
                                <Item.Description> AA</Item.Description>
                            </Item>
                        </Link>
                    </Items>
                </main>
                <footer>
                    <Footer />
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
