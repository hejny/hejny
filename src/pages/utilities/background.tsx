import { BackgroundCanvas } from '../../components/BackgroundCanvas/BackgroundCanvas';
import { AppHead } from '../../sections/00-AppHead/AppHead';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Background" isLanguagePickerVisible={false} isChatbotEnabled={false} />
            <BackgroundCanvas
                // width={1920}
                // height={1080}
                width={100}
                height={100}
                pointCount={15}
                animationSpeed={1}
                noiseIntensity={1}
            />
        </>
    );
}
