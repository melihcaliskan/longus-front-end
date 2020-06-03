import { i18n, withTranslation } from '../i18n'

import { API_URL } from '../helpers/urls'
import Container from 'react-bootstrap/Container'
import FindTab from '../components/Home/FindTab'
import Footer from '../components/Footer'
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import React from 'react';
import RecentTab from '../components/Home/RecentTab'
import Stats from '../components/Home/Stats'
import styled from 'styled-components';
import useWindowSize from "../helpers/windowSize"

const Home = ({ t, tReady, isLight, theme, toggleTheme, tabData, language }) => {
  const size = useWindowSize();
  const isMobile = size.width < 960

  if (!tReady) {
    return (<Loader />)
  }
  return (
    <>
      {/* TODO: React.Context ile erişilebilir? */}
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      {isMobile ?
        <>
          <FindTab theme={theme} count={3} />
          <br /><br />
        </>
        : null}
      <Container>
        {1 == 2 ?
          <RecentTab theme={theme} data={tabData} />
          : null}
      </Container>

      <Stats />
      <Footer />
    </>
  )
}
Home.getInitialProps = async ctx => {
  const res = await fetch(`${API_URL}issues/start=0&limit=10`)
  const issues = await res.json()
  return { tabData: issues }
}

export default withTranslation('home')(Home)