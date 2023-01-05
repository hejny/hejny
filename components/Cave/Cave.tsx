import { CaveOfIdeasImage } from '../wallpapers';
import styles from './Cave.module.css';

// !!! Wallpapers image library

export function Cave() {
    return (
        <div className={styles.cave}>
            <div
                className={styles.layer}
                style={{
                    zIndex: 1,
                }}
            >
                <CaveOfIdeasImage />
            </div>

            {/* 
            TODO: !!! Above the image NOT before
            <div
                  className={styles.layer}
                style={{
                    zIndex: 2,

                    gridColumn: `1 / span 1`,
                    gridRow: `1 / span 1`,
                    // !!! spaceTrim
                    background: `radial-gradient(closest-side, transparent,rgba(0,0,20,0.02), rgba(0,0,20,1) )`,

                    // background: `radial-gradient(closest-side, transparent,rgba(255,255,255,0.2), white)`,
                }}
            >
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
                aaaaas
                <br />
            </div>
            */}
        </div>
    );
}
