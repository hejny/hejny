import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../styles/config.css';
import '../styles/globals.css';
import '../styles/reset.css';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(App);
