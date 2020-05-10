import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../components/Button'
import Camera from "../components/svg/Camera"
import Card from "../components/Home/Card"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from './header'
import Lightning from "../components/svg/Lightning"
import LocationNo from "../components/svg/LocationNo"
import Phone from "../components/svg/Phone"
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Tabs from 'react-bootstrap/Tabs'
import { isMobile } from 'react-device-detect';
import { light_colors } from '../helpers/colors'
import styled from 'styled-components';

const Containerwd = styled.div`
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
`

const CustomTabs = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:8px;
  margin-bottom:1.5em;
`

const CardContainer = styled.div`
  display:flex;
  overflow-x:scroll;
  -webkit-overflow-scrolling: touch;
  
  max-width:55vw;
  margin:0 auto;

  text-align:center;
  padding-bottom:1em;

  @media only screen and (max-width: 1440px) {
    max-width:95vw;
  }
  @media only screen and (max-width: 640px) {
  }
`
/*
const tabItemStyles = {
  display:'flex',
  alignSelf:'center',
  width:'60%',
  overflowX: 'scroll',
  overflowScrolling: "touch",
  WebkitOverflowScrolling: "touch",
}
*/

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

const device_data = [
  {
    id: 1,
    name: "Samsung Note 10",
    url: "isinma-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 2,
    name: "iPhone 11",
    url: "gps-sorunu",
    img: "https://i.picsum.photos/id/215/400/600.jpg",
  },
  {
    id: 3,
    name: "Macbook Pro 2018",
    url: "kamera-sorunu",
    img: "https://i.picsum.photos/id/217/400/600.jpg",
  },
  {
    id: 4,
    name: "Logitech MX Master",
    url: "ekran-sorunu",
    img: "https://i.picsum.photos/id/227/400/600.jpg",
  },
  {
    id: 5,
    name: "Samsung Note 10",
    url: "isinma-sorunu",
    img: "https://i.picsum.photos/id/238/400/600.jpg",
  },
  {
    id: 6,
    name: "iPhone 11",
    url: "gps-sorunu",
    img: "https://i.picsum.photos/id/237/400/600.jpg",
  },
  {
    id: 7,
    name: "Macbook Pro 2018",
    url: "kamera-sorunu",
    img: "https://i.picsum.photos/id/232/400/600.jpg",
  },
  {
    id: 8,
    name: "Logitech MX Master",
    url: "ekran-sorunu",
    img: "https://i.picsum.photos/id/231/400/600.jpg",
  },
]

const List = ({ data }) => {
  return (
    <CardContainer>
      {data.map(item => (
        <Card key={item.id} href={item.url} svg={item.icon} img={item.img}>
          {item.name}
        </Card>
      ))}
    </CardContainer>
  )
}

const tabStyle = {
  background: '#F4F4F4',
  display: 'flex',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  borderRadius: '7px',
  fontWeight: '700',
  marginBottom: '1em'
}

const Tablar = ({ t }) => {
  const [key, setKey] = useState('issues');
  return (
    <Container >
      <Row style={{ justifyContent: 'center' }} className="home-tabs justify-content-md-center">
        <Tabs
          style={tabStyle}
          id="tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey="issues" title={t('tab.issues')}>
            <List data={issue_data} />
          </Tab>
          <Tab eventKey="devices" title={t('tab.devices')}>
            <List data={device_data} />
          </Tab>
        </Tabs>
        <Button shadow href="/" style={{ marginTop: '3em', width: "200px" }}>
          {t('tab.see-all')}
        </Button>
      </Row>
    </Container>
  )
}

Tablar.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Tablar)
