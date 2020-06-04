import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../helpers/styles.css'

import React, { useEffect, useState } from 'react'
import { appWithTranslation, i18n } from '../i18n'
import { darkTheme, lightTheme } from '../helpers/theme';

import { GlobalStyles } from '../helpers/global';
import Head from 'next/head'
import Loader from '../helpers/Loader'
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../contexts/useDarkMode';

const App = ({ Component, pageProps, router, router: { asPath } }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <Loader />
  }

  /*
    useEffect(() => {
      !componentMounted ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
    });
  */
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>longus.io</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
        <link rel="icon" href="assets/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      {/* İç sayfalar için Header burada tanımlanabilir*/}

      {/* Component render olacak ama gözükmeyecek. */}
      {/* Aksi takdirde meta tagleri bozuluyor. */}
      <Component
        {...pageProps}
        language={i18n.language}
        isLight={theme === 'light'}
        theme={theme === 'light' ? lightTheme : darkTheme}
        toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default appWithTranslation(App)