import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../helpers/styles.css'

import React, { useEffect, useState } from 'react'
import { appWithTranslation, i18n } from '../i18n'
import { darkTheme, lightTheme } from '../helpers/theme';
import { getJwt, getUserData } from '../helpers/auth'

import { GlobalStyles } from '../helpers/global';
import Head from 'next/head'
import Header from '../components/Header'
import Loader from '../helpers/Loader'
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../contexts/useDarkMode';
import useWindowSize from '../helpers/windowSize'

const App = ({ Component, pageProps, router, router: { asPath } }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const size = useWindowSize();
  const isMobile = size.width < 960

  const noHeader = ['/', '/home', '/login', '/register']
  const currentRoute = router.route

  if (!componentMounted) {
    return <Loader />
  }

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

      {/* Component render olacak ama gözükmeyecek. */}
      {/* Aksi takdirde meta tagleri bozuluyor. */}

      {!noHeader.includes(currentRoute) &&
        <Header isLight={theme === 'light'} toggleTheme={toggleTheme} />
      }

      <Component
        isMobile={isMobile}
        jwt={getJwt()}
        isAuth={getJwt()}
        language={i18n.language}
        isLight={theme === 'light'}
        theme={theme === 'light' ? lightTheme : darkTheme}
        toggleTheme={toggleTheme}
        {...pageProps}
      />
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