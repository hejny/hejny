import styles from './TiledBackground.module.css';

interface TiledBackgroundProps {
    // !!! Pass props
    // size: Vector;
}

export function TiledBackground(props: TiledBackgroundProps) {
    // const { size } = props;

    return <div className={styles.tiledBackground} />;
}

/**
 * TODO: LIB xyzt: Make loop via Vector.someMethodForEach((x,y)=>...) instead
 */
