import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';

import Button from '../components/Button'
import Camera from "../components/svg/Camera"
import Card from "../components/Home/Card"
import Header from './header'
import Lightning from "../components/svg/Lightning"
import LocationNo from "../components/svg/LocationNo"
import Phone from "../components/svg/Phone"
import { isMobile } from 'react-device-detect';
import { light_colors } from '../helpers/colors'
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:3em 0 0 0;
`
//background-color:#F4F4F4;

const TabItem = styled.div`
  flex-basis: 100%;
`
const TabTitle = styled.div`
  background:${props => props.active ? "orange" : "cyan"};
`

const CustomTabs = styled.div`
  background:${light_colors.BUTTON_BG};
  height:40px;
  width:380px;
  border-radius:8px;
  margin-bottom:3em;
`

const CardContainer = styled.div`
  width:60%;
  display:flex;
  overflow-x:scroll;
  -webkit-overflow-scrolling: touch;
  
  text-align:center;
  padding-bottom:2em;
  
  @media only screen and (max-width: 1200px) {
    width:80%;
  }
  @media only screen and (max-width: 640px) {
    width:90%;
  }
`


const issue_data = [
  {
    id: 1,
    name: "Isınma Sorunu",
    url: "isinma-sorunu",
    icon: <Lightning />,
  },
  {
    id: 2,
    name: "GPS Sorunu",
    url: "gps-sorunu",
    icon: <LocationNo />,
  },
  {
    id: 3,
    name: "Kamera Sorunu",
    url: "kamera-sorunu",
    icon: <Camera />,
  },
  {
    id: 4,
    name: "Ekran Sorunu",
    url: "ekran-sorunu",
    icon: <Phone />,
  },
  {
    id: 5,
    name: "Isınma Sorunu",
    url: "isinma-sorunu",
    icon: <Lightning />,
  },
  {
    id: 6,
    name: "GPS Sorunu",
    url: "gps-sorunu",
    icon: <LocationNo />,
  },
  {
    id: 7,
    name: "Kamera Sorunu",
    url: "kamera-sorunu",
    icon: <Camera />,
  },
  {
    id: 8,
    name: "Ekran Sorunu",
    url: "ekran-sorunu",
    icon: <Phone />,
  },
]

const Tablar = ({ t }) => {
  const [loading, setLoading] = useState(true);
  const [tabId, setTabId] = useState("issues");
  useEffect(() => {
    console.log(i18n)
    console.log(isMobile, loading)
  });
  //
  return (
    <>
      <Header />
      <Container>
        <CustomTabs as={Tabs} id="TabsExample" animate={true} selectedTabId={tabId} onChange={e => setTabId(e)}>
          <Tab id="issues" title={t('tab.issues')} panel={null} />
          <Tab id="devices" title={t('tab.devices')} panel={null} />
        </CustomTabs>

        <CardContainer>
          {issue_data.map(item => (
            <Card key={item.id} svg={item.icon}>
              {item.name}
            </Card>
          ))}
        </CardContainer>
        <br /> <br /> <br />
        <Button shadow href="/" style={{ width: "200px" }}>
          {t('tab.see-all')}
        </Button>
      </Container >
    </>
  )
}

Tablar.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Tablar)
