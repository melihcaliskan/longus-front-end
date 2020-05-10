import 'normalize.css';
//import '@blueprintjs/icons/lib/css/blueprint-icons.css'
//import '@blueprintjs/core/lib/css/blueprint.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../helpers/styles.css'

import React, { useState } from 'react'
import { darkTheme, lightTheme } from '../helpers/theme';

import { GlobalStyles } from '../helpers/global';
import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from '../i18n'
import { useDarkMode } from '../contexts/useDarkMode';

const CustomApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>longus.io</title>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} isLight={theme === 'light'} theme={theme === 'light' ? lightTheme : darkTheme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
export default appWithTranslation(CustomApp)