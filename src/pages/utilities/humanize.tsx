import { MiniappHumanizeAiText } from '../../components/MiniappHumanizeAiText/MiniappHumanizeAiText';
import { AppHead } from '../../sections/00-AppHead/AppHead';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Humanize Your AI Text" />
            <MiniappHumanizeAiText />
        </>
    );
}
