import { useState, useEffect } from 'react';
import { BackgroundCanvas } from '../components/BackgroundCanvas/BackgroundCanvas';
import { AppHead } from '../sections/00-AppHead/AppHead';

export default function TestBackgroundPage() {
    // State for all BackgroundCanvas props
    const [noiseIntensity, setNoiseIntensity] = useState(0.5);
    const [noiseScale, setNoiseScale] = useState(100);
    const [noiseFrequency, setNoiseFrequency] = useState(0.8);
    const [pointCount, setPointCount] = useState(6);
    const [animationSpeed, setAnimationSpeed] = useState(50);
    const [isPlaying, setIsPlaying] = useState(true);

    // Default colors for gradient points
    const [colors, setColors] = useState([
        '#4A90E2', // Blue
        '#E94B6A', // Pink/Red
        '#F5A623', // Orange
        '#9013FE', // Purple
        '#00BCD4', // Cyan
        '#FF9800', // Amber
    ]);

    // Update colors array when pointCount changes
    useEffect(() => {
        setColors((prevColors) => {
            if (prevColors.length >= pointCount) {
                return prevColors.slice(0, pointCount);
            } else {
                const additionalColors = [
                    '#8BC34A', '#795548', '#607D8B', '#E91E63', '#3F51B5',
                    '#009688', '#FFC107', '#FF5722', '#9C27B0', '#673AB7'
                ];
                const newColors = [...prevColors];
                while (newColors.length < pointCount) {
                    newColors.push(additionalColors[(newColors.length - prevColors.length) % additionalColors.length]);
                }
                return newColors;
            }
        });
    }, [pointCount]);

    const handleColorChange = (index: number, newColor: string) => {
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index] = newColor;
            return updatedColors;
        });
    };

    const resetToDefaults = () => {
        setNoiseIntensity(0.5);
        setNoiseScale(100);
        setNoiseFrequency(0.8);
        setPointCount(6);
        setAnimationSpeed(50);
        setColors(['#4A90E2', '#E94B6A', '#F5A623', '#9013FE', '#00BCD4', '#FF9800']);
    };

    return (
        <>
            <AppHead subtitle="Background Test" isLanguagePickerVisible={false} isChatbotEnabled={false} />
            <div style={{ 
                position: 'relative', 
                width: '100vw', 
                height: '100vh',
                overflow: 'hidden',
                background: '#000'
            }}>
                <BackgroundCanvas
                    width={1920}
                    height={1080}
                    pointCount={pointCount}
                    animationSpeed={animationSpeed}
                    noiseIntensity={noiseIntensity}
                    noiseScale={noiseScale}
                    noiseFrequency={noiseFrequency}
                    colors={colors}
                    showControls={true}
                    isPlaying={isPlaying}
                    onPlayingChange={setIsPlaying}
                    className=""
                />
                
                {/* Simplified Control Panel */}
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(0, 0, 0, 0.9)',
                    padding: '20px',
                    borderRadius: '12px',
                    color: 'white',
                    zIndex: 1000,
                    fontFamily: 'Arial, sans-serif',
                    minWidth: '300px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <h3 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                        Background Controls
                    </h3>
                    
                    {/* Noise Controls */}
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Noise Intensity: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{noiseIntensity.toFixed(2)}</span>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={noiseIntensity}
                            onChange={(e) => setNoiseIntensity(parseFloat(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Point Count: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{pointCount}</span>
                        </label>
                        <input
                            type="range"
                            min="3"
                            max="15"
                            step="1"
                            value={pointCount}
                            onChange={(e) => setPointCount(parseInt(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    {/* Color Pickers */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#fff' }}>
                            Colors
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '10px'
                        }}>
                            {colors.slice(0, pointCount).map((color, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <label style={{
                                        fontSize: '12px',
                                        color: '#ccc',
                                        marginBottom: '4px'
                                    }}>
                                        Point {index + 1}
                                    </label>
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => handleColorChange(index, e.target.value)}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: '2px solid #555',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Control Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            style={{
                                background: isPlaying ? '#ff4444' : '#44ff44',
                                color: 'white',
                                border: 'none',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                        </button>

                        <button
                            onClick={resetToDefaults}
                            style={{
                                background: '#4A90E2',
                                color: 'white',
                                border: 'none',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            🔄 Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
