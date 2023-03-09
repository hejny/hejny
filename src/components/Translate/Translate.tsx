import { ReactNode } from 'react';

interface TranslateProps {
    lang: string;
    children: ReactNode;
}

export function Translate(props: TranslateProps) {
    const { lang, children } = props;

    if (lang === 'en') {
        return <>{children}</>;
    }
    return <></>;
}

/**
 * !!! Change to translate library and delete the folder
 */