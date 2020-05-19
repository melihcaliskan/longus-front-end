import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import ActiveLink from "../components/ActiveLink"
import FindTab from '../components/Home/FindTab';
import Header from '../components/Home/Header'
import Loader from '../helpers/Loader'
import Tabs from '../components/Home/Tabs'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';

const Home = ({ t, tReady, isLight, theme, toggleTheme }) => {
  if (!tReady) {
    return (<Loader />)
  }
  return (
    <div style={{padding:'10em'}}>
      {/* TODO: React.Context ile erişilebilir? */}
      <FindTab theme={theme} />
    </div >
  )
}
Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)