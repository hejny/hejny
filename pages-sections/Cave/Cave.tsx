import { CaveOfIdeasWithTransparentLookThroughImage2 } from '../../public/wallpapers';
import styles from './Cave.module.css';

export function Cave() {
    return (
        <div className={styles.cave}>
            <div
                className={styles.layer}
                style={{
                    zIndex: 1,
                }}
            >
                <CaveOfIdeasWithTransparentLookThroughImage2 />
            </div>
        </div>
    );
}
