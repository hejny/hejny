import {
    CaveOfIdeasInLightbulbWithTransparentLookThrImage,
    CaveWithPrototypingLaboratoryImage,
    LightbulbOfIdeasWithTransparentLookThroughImage,
} from '../wallpapers';
import { Service } from './Service';
import styles from './Services.module.css';

export function Services() {
    return (
        <div className={styles.services}>
            <Service title="Hello1">
                <CaveOfIdeasInLightbulbWithTransparentLookThrImage />
            </Service>
            <Service title="Hello2">
                <CaveWithPrototypingLaboratoryImage />
            </Service>
            <Service title="Hello3">
                <LightbulbOfIdeasWithTransparentLookThroughImage />
            </Service>
        </div>
    );
}
