import { BackgroundCanvas } from '../../components/BackgroundCanvas/BackgroundCanvas';
import { AppHead } from '../../sections/00-AppHead/AppHead';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Background with Enhanced Noise" isLanguagePickerVisible={false} isChatbotEnabled={false} />
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                gap: '20px',
                padding: '20px',
                background: '#000'
            }}>
                {/* Grain Noise Example */}
                <div style={{ position: 'relative' }}>
                    <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '16px' }}>Grain Noise (Elegant & Subtle)</h3>
                    <BackgroundCanvas
                        width={400}
                        height={300}
                        pointCount={4}
                        animationSpeed={25}
                        noiseIntensity={0.12}
                        noiseScale={1.5}
                        noiseSpeed={0.3}
                        noiseType="grain"
                        showControls={false}
                    />
                </div>

                {/* Perlin Noise Example */}
                <div style={{ position: 'relative' }}>
                    <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '16px' }}>Perlin Noise (Smooth & Organic)</h3>
                    <BackgroundCanvas
                        width={400}
                        height={300}
                        pointCount={4}
                        animationSpeed={25}
                        noiseIntensity={0.18}
                        noiseScale={2.2}
                        noiseSpeed={0.4}
                        noiseType="perlin"
                        showControls={false}
                    />
                </div>

                {/* Film Noise Example */}
                <div style={{ position: 'relative' }}>
                    <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '16px' }}>Film Noise (Vintage & Textured)</h3>
                    <BackgroundCanvas
                        width={400}
                        height={300}
                        pointCount={4}
                        animationSpeed={25}
                        noiseIntensity={0.15}
                        noiseScale={1.8}
                        noiseSpeed={0.6}
                        noiseType="film"
                        showControls={false}
                    />
                </div>

                {/* Full-screen Interactive Example */}
                <div style={{ position: 'relative', gridColumn: '1 / -1' }}>
                    <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '16px' }}>Interactive Full Background (Grain)</h3>
                    <BackgroundCanvas
                        pointCount={8}
                        animationSpeed={30}
                        noiseIntensity={0.08}
                        noiseScale={2.0}
                        noiseSpeed={0.5}
                        noiseType="grain"
                        showControls={true}
                    />
                </div>
            </div>
        </>
    );
}
