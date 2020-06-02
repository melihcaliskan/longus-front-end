import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import { API_URL } from '../helpers/urls'
import ActiveLink from "../components/ActiveLink"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FindTab from '../components/Home/FindTab'
import Footer from '../components/Footer'
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import RecentTab from '../components/Home/RecentTab'
import Row from 'react-bootstrap/Row'
import Twemoji from '../components/Twemoji'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import useWindowSize from "../helpers/windowSize"

const BottomButton = styled.div`
  font-weight:700;
  color:${({ theme }) => theme.title};
  background:${({ theme }) => theme.darken_body};
  padding:0.2em 1em;
  border-radius:10px;
  margin-right:1em;
  cursor:pointer;
  box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.1);
`

const Home = ({ t, tReady, isLight, theme, toggleTheme, tabData, language }) => {
  console.log(tabData)
  const size = useWindowSize();
  const isMobile = size.width < 960

  if (!tReady) {
    return (<Loader />)
  }
  return (
    <>
      {/* TODO: React.Context ile erişilebilir? */}
      <h1>Testing Github actions on self hosted</h1>
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      {isMobile ?
        <>
          <FindTab theme={theme} count={3} />
          <br /><br />
        </>
        : null}
      {tabData ?
        <RecentTab theme={theme} data={tabData} />
        : null}
      <Footer />
    </>
  )
}
Home.getInitialProps = async ctx => {
  const res = await fetch(`${API_URL}issues`)
  const issues = await res.json()
  return { tabData: issues }
}

export default withTranslation('home')(Home)