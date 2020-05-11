import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import ActiveLink from "../components/ActiveLink"
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import Tabs from './tabs'
import fetch from 'isomorphic-unfetch'

const Home = ({ stars, t, isLight, theme, toggleTheme, tReady }) => {
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {loading && !tReady ?
        <Loader />
        : null}

      {/* TODO: React.Context ile erişilebilir? */}
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      <Tabs theme={theme} />

      <div style={{ margin: '2em', padding: '5em' }}>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('tr')}>
          tr
            </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('en')}>
          en
            </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('de')}>
          de
            </button>

        <br />

        <button
          type='button'
          onClick={toggleTheme}>
          {isLight ? "Gündüz" : "Gece"}
        </button>
        <br />
        <ActiveLink href="/login">
          Login
        </ActiveLink>
        <ActiveLink href="/register">
          Register
        </ActiveLink>
        <ActiveLink href="/header">
          Header Card
        </ActiveLink>
        <ActiveLink href="/issue">
          Issue Card
        </ActiveLink>
        <ActiveLink href="/tabs">
          Tabs
        </ActiveLink>
        <ActiveLink href="/detail">
          Detail
        </ActiveLink>
      </div>
    </div>
  )
}
Home.getInitialProps = async ctx => {
  //namespacesRequired: ['home']
  const { req } = ctx;
  console.log(req)

  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: `Rendered on server with lang: ${req.language} / star count: ${json.stargazers_count}` }
}

export default withTranslation('home')(Home)
