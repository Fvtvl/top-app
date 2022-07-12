import { AppProps } from '../node_modules/next/dist/shared/lib/router/router';
import Head from '../node_modules/next/head';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My PokeDex</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
<Component {...pageProps} />
  </>;
}

export default MyApp;
