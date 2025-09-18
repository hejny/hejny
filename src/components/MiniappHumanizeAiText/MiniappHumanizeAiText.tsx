import { humanizeAiText } from '@promptbook/markdown-utils';
import { useMemo, useState } from 'react';
import styles from './MiniappHumanizeAiText.module.css';

export function MiniappHumanizeAiText() {
    const [aiText, setAiText] = useState('');
    const humanizedText = useMemo(() => humanizeAiText(aiText), [aiText]);

    return (
        <div className={styles.MiniappHumanizeAiText}>
            <textarea
                placeholder="Paste your AI-generated text here..."
                onChange={(event) => {
                    setAiText(event.target.value);
                }}
            />
            <textarea readOnly value={humanizedText} />
        </div>
    );
}
