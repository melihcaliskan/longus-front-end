import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useRef, useState } from 'react';

import Button from 'react-bootstrap/Button'
import Card from '../components/All/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import Header from '../components/Header'
import LargeCard from '../components/All/LargeCard'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
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

const All = ({ t, isLight, toggleTheme }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Head>
                <title>{t('startsearching')}</title>
            </Head>
            <ContactHeader>
                <h3><Twemoji emoji="🔍" /> {t('startsearching')}</h3>
                <Form.Group style={{ width: '80%', marginTop: '1.5em' }} controlId="formBasicEmail">
                    <Form.Control placeholder={randomDevice} />
                </Form.Group>
            </ContactHeader>

            <Container style={{ marginTop: '5em' }}>
                <p style={{ textAlign: 'center' }}>Coming soon...</p>
            </Container>
            {/*}
            <Container style={{ marginTop: '5em' }}>
                <SectionTitle><Twemoji emoji="💻" /> {t('devices')}</SectionTitle>
                <Tabs t={t} />
            </Container>
            {*/}
        </>
    )
}

All.getInitialProps = async () => ({
    namespacesRequired: ['all'],
})

export default withTranslation('all')(All)
