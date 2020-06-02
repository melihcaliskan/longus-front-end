import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import FindTab from '../components/Home/FindTab';
import Loader from '../helpers/Loader'
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