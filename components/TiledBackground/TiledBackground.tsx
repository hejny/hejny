import cave_pattern from '../../public/patterns/Pavol_Hejny_Altamira_Cave_painting_5732f60b-c6cc-462b-8b51-45403e055bd3.png';
import ornaments_pattern from '../../public/patterns/Pavol_Hejny_ornaments_aa4f57c8-b7ac-4894-96df-0e93bf1522d2.png';
import styles from './TiledBackground.module.css';

interface TiledBackgroundProps {
    // !!! Pass props
    // size: Vector;
}

export function TiledBackground(props: TiledBackgroundProps) {
    // const { size } = props;

    return (
        <div className={styles.tiledBackground}>
            <div
                className={styles.layer}
                style={{
                    zIndex: 30,
                    backgroundImage: `url(${ornaments_pattern.src})`,
                    opacity: 0.5,
                    backgroundSize: `100px 100px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback */
                }}
            ></div>

            <div
                className={styles.layer}
                style={{
                    zIndex: 20,
                    backgroundImage: `url(${cave_pattern.src})`,
                    backgroundSize: `500px 500px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback */
                }}
            ></div>

            <div
                className={styles.layer}
                style={{
                    zIndex: 1000,
                    backgroundColor: `rgba(0, 0, 0, 0.9)`,
                    // backgroundColor: `rgba(25, 13, 78, 0.9)`,
                }}
            ></div>
        </div>
    );
}

/**
 * TODO: LIB xyzt: Make loop via Vector.someMethodForEach((x,y)=>...) instead
 */
