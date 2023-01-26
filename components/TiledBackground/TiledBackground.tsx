import tile_pattern from '../../public/patterns/Pavol_Hejn_Wallpaper_by_Wassily_Kandinsky_39a6badd-d6ec-48d9-8d93-a198a2c57973.png';
import styles from './TiledBackground.module.css';

interface TiledBackgroundProps {
    // !!! Pass props
    // size: Vector;
}

export function TiledBackground(props: TiledBackgroundProps) {
    // const { size } = props;

    return (
        <div className={styles.tiledBackground}>
            {/* 
            <div
                className={styles.layer}
                style={{
                    zIndex: 30,
                    backgroundImage: `url(${ornaments_pattern.src})`,
                    opacity: 0.5,
                    backgroundSize: `100px 100px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback * /
                }}
            ></div>
            */}

            <div
                className={styles.layer}
                style={{
                    zIndex: 20,
                    backgroundImage: `url(${tile_pattern.src})`,
                    backgroundSize: `350px 350px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback */
                }}
            ></div>

            <div
                className={styles.layer}
                style={{
                    zIndex: 1000,
                    backgroundColor: `rgba(0, 0, 0,1)`,
                    // backgroundColor: `rgba(25, 13, 78, 0.9)`,
                }}
            ></div>
        </div>
    );
}

/**
 * TODO: LIB xyzt: Make loop via Vector.someMethodForEach((x,y)=>...) instead
 */
