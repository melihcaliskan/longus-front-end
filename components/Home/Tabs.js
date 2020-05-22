import { Link, i18n, withTranslation } from '../../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../Button'
import Camera from "../svg/Camera"
import Card from "../Home/Card"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Lightning from "../svg/Lightning"
import { Tabs as Loader } from '../Loaders/Tabs'
import LocationNo from "../svg/LocationNo"
import Phone from "../svg/Phone"
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styled from 'styled-components';

export const CardContainer = styled.div`
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

const issue_data = [
  {
    id: 1,
    name: "Heating Issue",
    url: "isinma-sorunu",
    icon: <Lightning />,
  },
  {
    id: 2,
    name: "GPS Issue",
    url: "gps-sorunu",
    icon: <LocationNo />,
  },
  {
    id: 3,
    name: "Camera Issue",
    url: "kamera-sorunu",
    icon: <Camera />,
  },
  {
    id: 4,
    name: "Screen Issue",
    url: "ekran-sorunu",
    icon: <Phone />,
  },
  {
    id: 1,
    name: "Heating Issue",
    url: "isinma-sorunu",
    icon: <Lightning />,
  },
  {
    id: 2,
    name: "GPS Issue",
    url: "gps-sorunu",
    icon: <LocationNo />,
  },
  {
    id: 3,
    name: "Camera Issue",
    url: "kamera-sorunu",
    icon: <Camera />,
  },
  {
    id: 4,
    name: "Screen Issue",
    url: "ekran-sorunu",
    icon: <Phone />,
  },
  {
    id: 1,
    name: "Heating Issue",
    url: "isinma-sorunu",
    icon: <Lightning />,
  },
  {
    id: 2,
    name: "GPS Issue",
    url: "gps-sorunu",
    icon: <LocationNo />,
  },
  {
    id: 3,
    name: "Camera Issue",
    url: "kamera-sorunu",
    icon: <Camera />,
  },
  {
    id: 4,
    name: "Screen Issue",
    url: "ekran-sorunu",
    icon: <Phone />,
  },
]

const device_data = [
  {
    id: 22,
    name: "Samsung Note 10",
    url: "isinma-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 2222,
    name: "iPhone 11",
    url: "gps-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 2223,
    name: "Macbook Pro 2018",
    url: "kamera-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 222224,
    name: "Logitech MX Master",
    url: "ekran-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 225,
    name: "Samsung Note 10",
    url: "isinma-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 226,
    name: "iPhone 11",
    url: "gps-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 722,
    name: "Macbook Pro 2018",
    url: "kamera-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
  },
  {
    id: 228,
    name: "Logitech MX Master",
    url: "ekran-sorunu",
    img: "https://i.picsum.photos/id/223/400/600.jpg",
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

const CustomTab = ({ t, theme }) => {
  const [loading, setLoading] = useState(true);
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
            {loading ? <Loader type={"issue"} /> : <List data={issue_data} />}
          </Tab>
          <Tab eventKey="devices" title={t('tab.devices')}>
            {loading ? <Loader type={"devices"} /> : <List data={device_data} />}
          </Tab>
        </Tabs>
        <Button style={{ background: theme.darken_body, color: theme.text, marginTop: '3em', width: '180px' }} shadow href="/">
          {t('tab.see-all')}
        </Button>
      </Row>

      <button onClick={() => setLoading(!loading)} style={{ background: theme.darken_body, color: theme.text, marginTop: '3em', width: '180px' }} shadow>
        toggle state
      </button>


    </Container>
  )
}

CustomTab.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)