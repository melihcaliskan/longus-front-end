import { i18n, withTranslation } from '../i18n'

import { API_URL } from '../helpers/urls'
import Container from 'react-bootstrap/Container'
import FindTab from '../components/Home/FindTab'
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import React from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import useWindowSize from "../helpers/windowSize"

const RecentTab = dynamic(import("../components/Home/RecentTab"))
const Stats = dynamic(import("../components/Home/Stats"))

const Home = ({ isMobile, isAuth, t, tReady, isLight, theme, toggleTheme, tabData, language }) => {
  const router = useRouter()
  if (isAuth) {
    router.push("/dashboard")
    return <Loader />
  }

  if (!tReady) {
    return <Loader />
  }
  return (
    <>
      <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      {isMobile ?
        <>
          <FindTab theme={theme} count={3} />
          <br /><br />
        </>
        : null}

      <Container>
        <RecentTab theme={theme} data={tabData} />
      </Container>

      <Stats isLight={isLight} theme={theme} />
    </>
  )
}
Home.getInitialProps = async ctx => {
  const res = await fetch(`${API_URL}issues/start=0&limit=10`)
  const issues = await res.json()
  return { tabData: issues }
}

export default withTranslation('home')(Home)