import { useState, useCallback } from 'react';
import { BackgroundCanvas } from '../../components/BackgroundCanvas/BackgroundCanvas';
import { BackgroundCanvasControls } from '../../components/BackgroundCanvas/BackgroundCanvasControls';
import { AppHead } from '../../sections/00-AppHead/AppHead';

const DEFAULT_COLORS = [
    '#4A90E2', // Blue
    '#E94B6A', // Pink/Red
    '#F5A623', // Orange
    '#9013FE', // Purple
    '#00BCD4', // Cyan
    '#FF9800', // Amber
    '#8BC34A', // Light Green
    '#795548', // Brown
    '#607D8B', // Blue Grey
    '#E91E63', // Pink
    '#3F51B5', // Indigo
    '#009688', // Teal
    '#FFC107', // Yellow
    '#FF5722', // Deep Orange
    '#9C27B0', // Purple
];

export default function BackgroundPage() {
    // State for all BackgroundCanvas props
    const [pointCount, setPointCount] = useState(15);
    const [animationSpeed, setAnimationSpeed] = useState(50);
    const [noiseIntensity, setNoiseIntensity] = useState(0.5);
    const [noiseScale, setNoiseScale] = useState(100);
    const [noiseFrequency, setNoiseFrequency] = useState(0.8);
    const [colors, setColors] = useState(DEFAULT_COLORS);
    const [isPlaying, setIsPlaying] = useState(true);

    // Callback handlers for the controls
    const handleColorChange = useCallback((index: number, newColor: string) => {
        setColors(prevColors => {
            const updatedColors = [...prevColors];
            updatedColors[index] = newColor;
            return updatedColors;
        });
    }, []);

    const handleReset = useCallback(() => {
        setPointCount(15);
        setAnimationSpeed(50);
        setNoiseIntensity(0.5);
        setNoiseScale(100);
        setNoiseFrequency(0.8);
        setColors([...DEFAULT_COLORS]);
        setIsPlaying(true);
    }, []);

    const handleRandomizeColors = useCallback(() => {
        const randomColors = Array.from({ length: pointCount }, () => {
            const hue = Math.floor(Math.random() * 360);
            const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
            const lightness = Math.floor(Math.random() * 30) + 45;  // 45-75%
            
            // Convert HSL to hex
            const hslToHex = (h: number, s: number, l: number) => {
                const hNorm = h / 360;
                const sNorm = s / 100;
                const lNorm = l / 100;
                
                const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
                const x = c * (1 - Math.abs((hNorm * 6) % 2 - 1));
                const m = lNorm - c / 2;
                
                let r = 0, g = 0, b = 0;
                
                if (0 <= hNorm && hNorm < 1/6) {
                    r = c; g = x; b = 0;
                } else if (1/6 <= hNorm && hNorm < 1/3) {
                    r = x; g = c; b = 0;
                } else if (1/3 <= hNorm && hNorm < 1/2) {
                    r = 0; g = c; b = x;
                } else if (1/2 <= hNorm && hNorm < 2/3) {
                    r = 0; g = x; b = c;
                } else if (2/3 <= hNorm && hNorm < 5/6) {
                    r = x; g = 0; b = c;
                } else if (5/6 <= hNorm && hNorm < 1) {
                    r = c; g = 0; b = x;
                }
                
                const rVal = Math.round((r + m) * 255);
                const gVal = Math.round((g + m) * 255);
                const bVal = Math.round((b + m) * 255);
                
                return `#${rVal.toString(16).padStart(2, '0')}${gVal.toString(16).padStart(2, '0')}${bVal.toString(16).padStart(2, '0')}`;
            };
            
            return hslToHex(hue, saturation, lightness);
        });
        setColors(randomColors);
    }, [pointCount]);

    return (
        <>
            <AppHead subtitle="Background" isLanguagePickerVisible={false} isChatbotEnabled={false} />
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
                    showControls={false}
                    isPlaying={isPlaying}
                    onPlayingChange={setIsPlaying}
                    className=""
                />
                
                {/* Custom Control Panel */}
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
                    backdropFilter: 'blur(10px)',
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
                            style={{ 
                                width: '100%',
                                appearance: 'none',
                                height: '6px',
                                background: 'linear-gradient(to right, #333, #00ff88)',
                                borderRadius: '3px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Noise Scale: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{noiseScale}</span>
                        </label>
                        <input
                            type="range"
                            min="50"
                            max="300"
                            step="10"
                            value={noiseScale}
                            onChange={(e) => setNoiseScale(parseInt(e.target.value))}
                            style={{ 
                                width: '100%',
                                appearance: 'none',
                                height: '6px',
                                background: 'linear-gradient(to right, #333, #00ff88)',
                                borderRadius: '3px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Noise Frequency: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{noiseFrequency.toFixed(1)}</span>
                        </label>
                        <input
                            type="range"
                            min="0.1"
                            max="2"
                            step="0.1"
                            value={noiseFrequency}
                            onChange={(e) => setNoiseFrequency(parseFloat(e.target.value))}
                            style={{ 
                                width: '100%',
                                appearance: 'none',
                                height: '6px',
                                background: 'linear-gradient(to right, #333, #00ff88)',
                                borderRadius: '3px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Animation Controls */}
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Point Count: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{pointCount}</span>
                        </label>
                        <input
                            type="range"
                            min="3"
                            max="30"
                            step="1"
                            value={pointCount}
                            onChange={(e) => setPointCount(parseInt(e.target.value))}
                            style={{ 
                                width: '100%',
                                appearance: 'none',
                                height: '6px',
                                background: 'linear-gradient(to right, #333, #00ff88)',
                                borderRadius: '3px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                            Animation Speed: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{animationSpeed}</span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="200"
                            step="5"
                            value={animationSpeed}
                            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                            style={{ 
                                width: '100%',
                                appearance: 'none',
                                height: '6px',
                                background: 'linear-gradient(to right, #333, #00ff88)',
                                borderRadius: '3px',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Color Pickers */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#fff' }}>
                            Gradient Point Colors
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                            gap: '10px',
                            maxHeight: '300px',
                            overflowY: 'auto'
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
                                            width: '50px',
                                            height: '50px',
                                            border: '2px solid #555',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            backgroundColor: 'transparent'
                                        }}
                                        title={`Color for point ${index + 1}: ${color}`}
                                    />
                                    <span style={{
                                        fontSize: '10px',
                                        color: '#aaa',
                                        marginTop: '2px',
                                        fontFamily: 'monospace'
                                    }}>
                                        {color.toUpperCase()}
                                    </span>
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
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                        </button>

                        <button
                            onClick={handleReset}
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

                        <button
                            onClick={handleRandomizeColors}
                            style={{
                                background: '#9013FE',
                                color: 'white',
                                border: 'none',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            🎨 Randomize
                        </button>
                    </div>

                    {/* Info */}
                    <div style={{
                        marginTop: '20px',
                        padding: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        color: '#ccc'
                    }}>
                        <strong>Tip:</strong> Adjust noise intensity for different effects - low values for subtle elegance, higher values for dramatic textures. Change point count and colors to create your perfect background!
                    </div>
                </div>
            </div>
        </>
    );
}
