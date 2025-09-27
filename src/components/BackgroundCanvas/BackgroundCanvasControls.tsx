import { useCallback, useState } from 'react';
import styles from './BackgroundCanvasControls.module.css';

interface BackgroundCanvasControlsProps {
    // Current prop values
    pointCount: number;
    animationSpeed: number;
    noiseIntensity: number;
    noiseScale: number;
    noiseFrequency: number;
    colors: string[];
    isPlaying: boolean;
    
    // Callbacks for prop changes
    onPointCountChange: (value: number) => void;
    onAnimationSpeedChange: (value: number) => void;
    onNoiseIntensityChange: (value: number) => void;
    onNoiseScaleChange: (value: number) => void;
    onNoiseFrequencyChange: (value: number) => void;
    onColorChange: (index: number, color: string) => void;
    onPlayingChange: (isPlaying: boolean) => void;
    
    // Control actions
    onReset: () => void;
    onRandomizeColors: () => void;
}

export function BackgroundCanvasControls({
    pointCount,
    animationSpeed,
    noiseIntensity,
    noiseScale,
    noiseFrequency,
    colors,
    isPlaying,
    onPointCountChange,
    onAnimationSpeedChange,
    onNoiseIntensityChange,
    onNoiseScaleChange,
    onNoiseFrequencyChange,
    onColorChange,
    onPlayingChange,
    onReset,
    onRandomizeColors,
}: BackgroundCanvasControlsProps) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = useCallback(() => {
        setIsVisible(prev => !prev);
    }, []);

    const handlePointCountChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        onPointCountChange(value);
    }, [onPointCountChange]);

    const handleAnimationSpeedChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        onAnimationSpeedChange(value);
    }, [onAnimationSpeedChange]);

    const handleNoiseIntensityChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        onNoiseIntensityChange(value);
    }, [onNoiseIntensityChange]);

    const handleNoiseScaleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        onNoiseScaleChange(value);
    }, [onNoiseScaleChange]);

    const handleNoiseFrequencyChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        onNoiseFrequencyChange(value);
    }, [onNoiseFrequencyChange]);

    const handleColorChange = useCallback((index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        onColorChange(index, event.target.value);
    }, [onColorChange]);

    if (!isVisible) {
        return (
            <button 
                className={styles.showButton}
                onClick={toggleVisibility}
                title="Show controls"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Controls
            </button>
        );
    }

    return (
        <div className={styles.controlsContainer}>
            <div className={styles.header}>
                <h3>Background Controls</h3>
                <button 
                    className={styles.hideButton}
                    onClick={toggleVisibility}
                    title="Hide controls"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="pointCount">
                    Point Count: <span className={styles.valueDisplay}>{pointCount}</span>
                </label>
                <input
                    type="range"
                    id="pointCount"
                    min="3"
                    max="30"
                    step="1"
                    value={pointCount}
                    onChange={handlePointCountChange}
                    className={styles.slider}
                />
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="animationSpeed">
                    Animation Speed: <span className={styles.valueDisplay}>{animationSpeed}</span>
                </label>
                <input
                    type="range"
                    id="animationSpeed"
                    min="10"
                    max="100"
                    step="5"
                    value={animationSpeed}
                    onChange={handleAnimationSpeedChange}
                    className={styles.slider}
                />
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="noiseIntensity">
                    Noise Intensity: <span className={styles.valueDisplay}>{noiseIntensity.toFixed(2)}</span>
                </label>
                <input
                    type="range"
                    id="noiseIntensity"
                    min="0"
                    max="1"
                    step="0.01"
                    value={noiseIntensity}
                    onChange={handleNoiseIntensityChange}
                    className={styles.slider}
                />
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="noiseScale">
                    Noise Scale: <span className={styles.valueDisplay}>{noiseScale}</span>
                </label>
                <input
                    type="range"
                    id="noiseScale"
                    min="50"
                    max="300"
                    step="10"
                    value={noiseScale}
                    onChange={handleNoiseScaleChange}
                    className={styles.slider}
                />
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="noiseFrequency">
                    Noise Frequency: <span className={styles.valueDisplay}>{noiseFrequency.toFixed(1)}</span>
                </label>
                <input
                    type="range"
                    id="noiseFrequency"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={noiseFrequency}
                    onChange={handleNoiseFrequencyChange}
                    className={styles.slider}
                />
            </div>

            <div className={styles.colorSection}>
                <h4>Gradient Point Colors</h4>
                <div className={styles.colorGrid}>
                    {colors.map((color, index) => (
                        <div key={index} className={styles.colorControl}>
                            <label htmlFor={`color-${index}`}>
                                Point {index + 1}:
                            </label>
                            <div className={styles.colorInputWrapper}>
                                <input
                                    type="color"
                                    id={`color-${index}`}
                                    value={color}
                                    onChange={(event) => handleColorChange(index, event)}
                                    className={styles.colorInput}
                                />
                                <span className={styles.colorValue}>{color}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.actionButtons}>
                <button 
                    onClick={() => onPlayingChange(!isPlaying)}
                    className={`${styles.actionButton} ${isPlaying ? styles.pauseButton : styles.playButton}`}
                    title={isPlaying ? 'Pause animation' : 'Play animation'}
                >
                    {isPlaying ? (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                            Pause
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Play
                        </>
                    )}
                </button>
                <button 
                    onClick={onRandomizeColors}
                    className={styles.actionButton}
                    title="Generate random colors"
                >
                    🎨 Randomize Colors
                </button>
                <button 
                    onClick={onReset}
                    className={styles.actionButton}
                    title="Reset to default values"
                >
                    🔄 Reset
                </button>
            </div>
        </div>
    );
}
