import { useEffect, useState } from 'react';
import { generated_patterns } from '../../public/patterns';
import styles from './TiledBackground.module.css';

interface TiledBackgroundProps {
    // !!! Pass props
    // size: Vector;
}

export function TiledBackground(props: TiledBackgroundProps) {
    // const { size } = props;

    const [size, setSize] = useState(350);

    const [index, setIndexRaw] = useState(0);

    const setIndex = (index: number) => {
        setIndexRaw((index + generated_patterns.length) % generated_patterns.length);
    };

    const [isPlaying, setPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) {
            return () => {};
        }
        const interval = setInterval(() => {
            setIndex(index + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [index, isPlaying]);

    return (
        <div className={styles.tiledBackground}>
            <div className={styles.picker}>
                <div className={styles.pickerControls}>
                    <button onClick={() => setIndex(index - 1)}>◀</button>
                    {`${index + 1} / ${generated_patterns.length}`}
                    <button onClick={() => setIndex(index + 1)}>▶</button>

                    <button onClick={() => setPlaying(!isPlaying)}>{isPlaying ? '⏸' : '▶'}</button>

                    <input
                        type={'number'}
                        value={size}
                        min={0}
                        step={50}
                        onChange={(event) => setSize(parseInt(event.target.value, 10))}
                    />
                </div>
                <div>{generated_patterns[index].src.split('/').pop()}</div>
            </div>

            <div
                className={styles.layer}
                style={{
                    zIndex: 20,
                    backgroundImage: `url(${generated_patterns[index].src})`,
                    backgroundSize: `${size}px ${size}px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback */
                }}
            ></div>

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

            {/* 
            <div
                className={styles.layer}
                style={{
                    zIndex: 20,
                    backgroundImage: `url(${tile_pattern.src})`,
                    backgroundSize: `350px 350px`,
                    backgroundRepeat: `repeat`,
                    /* TODO: !!! ACRY all background-image should have background-color fallback * /
                }}
            ></div>
            */}

            {/* 
            <div
                className={styles.layer}
                style={{
                    zIndex: 1000,
                    backgroundColor: `rgba(0, 0, 0,1)`,
                    // backgroundColor: `rgba(25, 13, 78, 0.9)`,
                }}
            ></div>
            */}
        </div>
    );
}

/**
 * TODO: Extract background picker from this to separate LIB
 * TODO: LIB xyzt: Make loop via Vector.someMethodForEach((x,y)=>...) instead
 */
