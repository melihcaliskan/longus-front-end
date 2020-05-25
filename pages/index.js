import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import ActiveLink from "../components/ActiveLink"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FindTab from '../components/Home/FindTab'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import Row from 'react-bootstrap/Row'
import Tabs from '../components/Home/Tabs'
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

const Home = ({ t, tReady, isLight, theme, toggleTheme }) => {
  const size = useWindowSize();
  const isMobile = size.width < 960

  if (!tReady) {
    return (<Loader />)
  }
  return (
    <div>
      {/* TODO: React.Context ile erişilebilir? */}
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />

      {isMobile ?
        <>
          <FindTab theme={theme} count={3} />
          <br /><br />
        </>
        : null}

      <Tabs theme={theme} />

      {1 == 2 ?
        <div style={{ margin: '2em', padding: '5em' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Dev Components</h2>
          <div style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', display: 'flex' }}>
            <BottomButton>
              <ActiveLink white={!isLight} href="/register">
                Register
        </ActiveLink>
            </BottomButton>
            <BottomButton>
              <ActiveLink white={!isLight} href="/header">
                Header Card
        </ActiveLink>
            </BottomButton>
            <BottomButton>
              <ActiveLink white={!isLight} href="/footer">
                Footer
        </ActiveLink>
            </BottomButton>
            <BottomButton>
              <ActiveLink white={!isLight} href="/detail">
                Detail
        </ActiveLink>
            </BottomButton>
          </div>
          <div style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: '3em', display: 'flex' }}>
            <BottomButton onClick={() => i18n.changeLanguage('tr')}>
              tr
        </BottomButton>
            <BottomButton onClick={() => i18n.changeLanguage('en')}>
              en
        </BottomButton>
            <BottomButton onClick={() => i18n.changeLanguage('de')}>
              de
        </BottomButton>
          </div>
        </div >

        : null}

      <Footer />
    </div >
  )
}
Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)