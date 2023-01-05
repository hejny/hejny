import { CaveOfIdeasInLightbulbImage } from '../wallpapers';
import { Service } from './Service';
import styles from './Services.module.css';

// !!! Wallpapers image library + script
export function Services() {
    return (
        <div className={styles.services}>
            <Service title="Hello1">
                <CaveOfIdeasInLightbulbImage />
            </Service>
            <Service title="Hello2">
                <CaveOfIdeasInLightbulbImage />
            </Service>
            <Service title="Hello3">
                <CaveOfIdeasInLightbulbImage />
            </Service>
        </div>
    );
}
