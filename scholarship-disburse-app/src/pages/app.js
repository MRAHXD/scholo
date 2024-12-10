// pages/_app.js
import React from 'react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
