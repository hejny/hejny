import { useState, useEffect, useCallback } from 'react';
import { BackgroundCanvas } from '../components/BackgroundCanvas/BackgroundCanvas';
import { BackgroundCanvasControls } from '../components/BackgroundCanvas/BackgroundCanvasControls';
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

    const handleColorChange = useCallback((index: number, newColor: string) => {
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index] = newColor;
            return updatedColors;
        });
    }, []);

    const resetToDefaults = useCallback(() => {
        setNoiseIntensity(0.5);
        setNoiseScale(100);
        setNoiseFrequency(0.8);
        setPointCount(6);
        setAnimationSpeed(50);
        setColors(['#4A90E2', '#E94B6A', '#F5A623', '#9013FE', '#00BCD4', '#FF9800']);
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
                    showControls={false}
                    isPlaying={isPlaying}
                    onPlayingChange={setIsPlaying}
                    className=""
                />
                
                <BackgroundCanvasControls
                    pointCount={pointCount}
                    animationSpeed={animationSpeed}
                    noiseIntensity={noiseIntensity}
                    noiseScale={noiseScale}
                    noiseFrequency={noiseFrequency}
                    colors={colors}
                    onPointCountChange={setPointCount}
                    onAnimationSpeedChange={setAnimationSpeed}
                    onNoiseIntensityChange={setNoiseIntensity}
                    onNoiseScaleChange={setNoiseScale}
                    onNoiseFrequencyChange={setNoiseFrequency}
                    onColorChange={handleColorChange}
                    onReset={resetToDefaults}
                    onRandomizeColors={handleRandomizeColors}
                />
            </div>
        </>
    );
}
