import { API_URL, API_URL_W } from '../helpers/urls'
import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useRef, useState } from 'react';

import Button from 'react-bootstrap/Button'
import Card from '../components/All/Card'
import CategoryList from '../components/All/CategoryList'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import Header from '../components/Header'
import LargeCard from '../components/All/LargeCard'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import Row from 'react-bootstrap/Row'
import Twemoji from '../components/Twemoji'
import { randomDevice } from '../helpers/placeholderGenerator'
import styled from 'styled-components';

const ContactHeader = styled.div`
    background-image:url('/assets/issue-bg.png');
    background-repeat:repat;
    background-size: 60px;
    height:350px;
    margin-top:-9em;
    padding:10em 10vw 0 10vw;

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


const Tabs = ({ t }) => {
    return (
        <TabContainer>
            <TabTitle>{t('categories')}</TabTitle>
            <div style={{ display: 'flex', alignItems: 'center', overflow: 'scroll', paddingBottom: '1em' }}>
                {['Tümü', 'Telefon', 'Akıllı Saat', 'Kulaklık', "Tv", "Kamera"].map((placement, index) => (
                    <TabButton key={index} active={index == 0}>
                        <p>{placement}</p>
                    </TabButton>
                ))}
            </div>
        </TabContainer>
    )
}

const All = ({ t, query, language, categories, devices }) => {
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

            <Container style={{ marginTop: '2em' }}>
                <Row>
                    <Col>
                        <CategoryList categories={categories} lang={language} query={query} />
                    </Col>
                    <Col xs={8}>
                        {JSON.stringify(devices)}
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