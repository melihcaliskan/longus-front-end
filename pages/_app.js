import 'normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../helpers/styles.css'

import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeContextProvider from "../contexts/ThemeContext"
import { appWithTranslation } from '../i18n'

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContextProvider>
        <Head>
          <title>longus.io</title>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeContextProvider>
    )
  }
}
export default appWithTranslation(CustomApp)