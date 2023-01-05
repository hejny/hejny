import Image from 'next/image';
import cave_of_ideas_in_lightbulb from '../../public/wallpapers/Pavol_Hejn_cave_of_ideas_in_lightbulb_with_transparent_look_thr_d3273ad0-097f-4011-b799-1c379bb05ee3.png';
import { Service } from './Service';
import styles from './Services.module.css';

// !!! Wallpapers image library + script
export function Services() {
    return (
        <div className={styles.services}>
            <Service title="Hello1">
                <Image alt="!!!" src={cave_of_ideas_in_lightbulb}  />
            </Service>
            <Service title="Hello2">
                <Image alt="!!!" src={cave_of_ideas_in_lightbulb}/>
            </Service>
            <Service title="Hello3">
                <Image alt="!!!" src={cave_of_ideas_in_lightbulb} />
            </Service>
        </div>
    );
}
