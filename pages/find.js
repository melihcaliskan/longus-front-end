import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import FindTab from '../components/Home/FindTab';
import styled from 'styled-components';

const Home = ({ t, tReady, isLight, theme, toggleTheme }) => {
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