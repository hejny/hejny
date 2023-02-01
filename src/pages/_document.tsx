import { Head, Html, Main, NextScript } from 'next/document';
import { createContext } from 'react';
import { DEBUG } from '../../config';

export const DebugContext = createContext<typeof DEBUG>(DEBUG);

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <DebugContext.Provider value={DEBUG}>
                    <Main />
                </DebugContext.Provider>
                <NextScript />
            </body>
        </Html>
    );
}

/**
 * TODO: Is this a good place to insert a <DebugContext.Provider
 */
