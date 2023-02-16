import { Head, Html, Main, NextScript } from 'next/document';
import { createContext } from 'react';
import { DEBUG } from '../../config';
import { ShuffleSeedContext } from '../components/Shuffle/Shuffle';

export const DebugContext = createContext<typeof DEBUG>(DEBUG);

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <DebugContext.Provider value={DEBUG}>
                    <ShuffleSeedContext.Provider value={new Date().getUTCHours()}>
                        <Main />
                    </ShuffleSeedContext.Provider>
                </DebugContext.Provider>
                <NextScript />
            </body>
        </Html>
    );
}

/**
 * TODO: Is this a good place to insert a <DebugContext.Provider
 */
