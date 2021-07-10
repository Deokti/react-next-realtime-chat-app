import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';


function App({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default App;
