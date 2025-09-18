import { AppHead } from '../../sections/00-AppHead/AppHead';
import { humanizeAiText } from '@promptbook/utils';
import { MiniappHumanizeAiText } from '../../components/MiniappHumanizeAiText/MiniappHumanizeAiText';

export default function BackgroundPage() {
    return (
        <>
            <AppHead subtitle="Humanize Your AI Text" />
            <MiniappHumanizeAiText />
        </>
    );
}
