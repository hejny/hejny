import { BackgroundCanvas } from '../../components/BackgroundCanvas/BackgroundCanvas';
import { AppHead } from '../../sections/00-AppHead/AppHead';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Background" isLanguagePickerVisible={false} isChatbotEnabled={false} />
            <BackgroundCanvas width={1920} height={1080} pointCount={5} animationSpeed={0.001} noiseIntensity={0.1} />
        </>
    );
}
