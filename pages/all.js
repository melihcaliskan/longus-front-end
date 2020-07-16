import { API_URL, API_URL_W } from '../helpers/urls'
import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useRef, useState } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import CategoryList from '../components/All/CategoryList'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row'
import Twemoji from '../components/Twemoji'
import { randomDevice } from '../helpers/placeholderGenerator'
import styled from 'styled-components';

const ContactHeader = styled.div`
    background-image:url('/assets/issue-bg.png');
    background-size: 60px;
    height:350px;
    margin-top:-9em;
    padding:10em 10vw 0 10vw;

    animation-name: bgAnimation;
    animation-duration: .7s;
    background-position-y: 60px;

    display:flex;
    flex-direction:column;
    align-items:center;
    
    h3{
        font-size:40px;
        font-weight:800;
        text-align:center;
    }

    @media only screen and (max-width: 960px) {
        h3{
        font-size:30px;
    }
        padding:11em 3vw 0 3vw;
    }

    @keyframes bgAnimation {
        from { background-position-y: 20px }
        to { background-position-y: 60px }
    }
`
const SectionTitle = styled.h3`
    text-transform:uppercase;
    font-weight:700;
    font-size:30px;
`

const TabContainer = styled.div`
    margin-top:1em;
`

const TabTitle = styled.p`
    text-transform:uppercase;
    margin-bottom:1em;
`

const TabButton = styled.div`
    text-transform:uppercase;
    cursor:pointer;
    margin-right:1em;

    background:${props => props.active ? props.theme.BUTTON_BLUE : props.theme.button_bg};
    
    border:${props => `1px solid ${props.theme.scrollbar_dark}`};

    padding:0.5em 1.3em;
    border-radius:5px;

    p{
        min-width:90px;
        font-size:14px;
        color:${props => props.active ? 'white' : props.theme.text};
        text-align:center;
    }

`

const CardContainer = styled.div`
    margin-top:2em;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    .grid-2{
        grid-column: span 2;
    }

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
    }
`

const DeviceCardContainer = styled.a`
    &:link, &:hover {
        text-decoration:none;
        color:${({ theme }) => theme.text};
    }
    display:flex;

    align-items:center;
    justify-content:space-between;    

    margin-top:2em;
    padding:2em;
    
    border-radius:7px;
    background:${({ theme }) => theme.body_100};

    transition: background-color .4s;
    &:hover{
        background:${({ theme }) => theme.body_200};
    }
    @media only screen and (max-width: 960px) {
        margin-top:1.2em;
        padding:1em;
        justify-content:flex-end;
        flex-direction:row-reverse;
    }
`

const DeviceBrand = styled.h4`
    color:${({ theme }) => theme.light_brand};
    text-transform:uppercase;
    font-weight:800;
    font-size:16px;
    @media only screen and (max-width: 960px) {
        font-size:14px;
    }
`

const DeviceName = styled.h2`
    color:${({ theme }) => theme.title};
    font-weight:800;
    font-size:36px;
    margin-top:0.2em;
    @media only screen and (max-width: 960px) {
        font-size:28px;
    }
`


const DeviceImage = styled.img`
    width:100px;
    height:100px;
    object-fit:contain;
    mix-blend-mode: multiply;
    @media only screen and (max-width: 960px) {
        margin-right:2em;
        width:80px;
        height:80px;
    }
`
const Left = styled.div`
`

const Info = styled.div`
  display:flex;
  margin-top:2em;

  div{
    display:flex;
    align-items:center;

    svg{
      margin-right:0.4em;
    }
    
    p {
      color:${({ theme }) => theme.dark_400_text};
      font-size:18px;
      font-weight:600;
    }
    
    margin-right:1em;
    
    @media only screen and (max-width: 960px) {
      p {
        font-size:16px;
      }
    }
  }

  @media only screen and (max-width: 960px) {
      width:100%;
      margin-bottom:1em;
      justify-content:space-evenly;
    }

`


const DeviceCard = ({ t, isMobile, item }) => {
    //kategory all ise altta kategoriyi göster
    const { name, brand, photo } = item
    return (
        <DeviceCardContainer href={`/devices/${item.slug}`}>
            <Left>
                <DeviceBrand>Samsung</DeviceBrand>
                <DeviceName>{name}</DeviceName>
                {!isMobile &&
                    <Info>
                        <div>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.22222 0H22.2222C23.4495 0 24.4444 0.994923 24.4444 2.22222V17.7778C24.4444 19.0051 23.4495 20 22.2222 20H2.22222C0.994923 20 0 19.0051 0 17.7778V2.22222C0 0.994923 0.994923 0 2.22222 0ZM2.22222 2.22222V17.7778H22.2222V2.22222H2.22222ZM6.66667 15.5556H8.88889V8.88896H6.66667V15.5556ZM13.3335 15.5555H11.1112V4.44438H13.3335V15.5555ZM15.5554 15.5557H17.7776V7.77791H15.5554V15.5557Z" fill="#464646" />
                            </svg>
                            <p>{1} {!isMobile ? t('issues') : t('mobileIssues')}</p>
                        </div>
                        <div>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 21.8042L12.0868 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H6V21.8042ZM11.5132 16L7.99999 18.1958V16H3.99999V4.00001H20V16H11.5132Z" fill="#464646" />
                            </svg>
                            <p>{1} {!isMobile ? t('comment') : t('mobileComment')}</p>
                        </div>
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#17C671" />
                            </svg>
                            <p>{!isMobile ? t('fit') : t('mobileFit')}</p>
                        </div>
                    </Info>
                }
            </Left>
            <DeviceImage height={100} src={API_URL_W + photo.url} />
        </DeviceCardContainer>
    )
}

const All = ({ t, query, language, categories, devices, isMobile }) => {
    const { category } = query
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Head>
                <title>{t('startsearching')}</title>
            </Head>
            <ContactHeader>
                <h3><Twemoji emoji="🔍" /> {t('startsearching')}</h3>
                <Form.Group style={{ width: '80%', marginTop: '1.5em' }} controlId="formBasicEmail">
                    <Form.Control size="lg" placeholder={randomDevice} />
                </Form.Group>
            </ContactHeader>
            <Container fluid style={{ marginTop: '2em' }}>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={2}>
                        <CategoryList categories={categories} lang={language} query={query} isMobile={isMobile} />
                    </Col>
                    <Col xs={12} md={7}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Listing: All Devices</Breadcrumb.Item>
                            {category &&
                                <Breadcrumb.Item active>{category}</Breadcrumb.Item>
                            }
                        </Breadcrumb>
                        {devices && devices.length ?
                            devices.map((item, index) => <DeviceCard t={t} isMobile={isMobile} item={item} />)
                            :
                            <p>"no device"</p>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

All.getInitialProps = async ({ res, query, err }) => {
    const { category } = query

    const namespacesRequired = ["all"];

    const response = await fetch(`${API_URL}categories`)
    const categoryData = await response.json()
    categoryData.map(item => delete item.devices)

    const devices_url = category ? `${API_URL}devices?category.slug=${category}` : `${API_URL}devices`
    const response_two = await fetch(devices_url)
    const deviceData = await response_two.json()


    return { namespacesRequired, categories: categoryData, devices: deviceData, query }
}

export default withTranslation('all')(All)