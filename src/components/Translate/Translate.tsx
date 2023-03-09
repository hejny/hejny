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
