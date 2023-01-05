import {
    CaveOfIdeasInLightbulbWithTransparentLookThrImage,
    CaveWithPresentationImage,
    CaveWithPrototypingLaboratoryImage,
} from '../wallpapers';
import { Service } from './Service';
import styles from './Services.module.css';

export function Services() {
    return (
        <div className={styles.services}>
            <Service title="Consulting">
                <CaveOfIdeasInLightbulbWithTransparentLookThrImage />
            </Service>
            <Service title="Talk">
                <CaveWithPresentationImage />
            </Service>
            <Service title="Prototyping">
                <CaveWithPrototypingLaboratoryImage />
            </Service>
        </div>
    );
}
