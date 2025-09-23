import { BackgroundCanvas } from '../../components/BackgroundCanvas/BackgroundCanvas';
import { AppHead } from '../../sections/00-AppHead/AppHead';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Background" isLanguagePickerVisible={false} isChatbotEnabled={false} />
            <BackgroundCanvas
                // Now uses Full HD (1920x1080) by default
                pointCount={15}
                animationSpeed={25}
                noiseIntensity={0.5}
            />
        </>
    );
}
