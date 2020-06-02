import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useRef, useState } from 'react';

import { API_URL } from '../helpers/urls'
import ActiveLink from '../components/ActiveLink'
import Button from 'react-bootstrap/Button'
import Card from '../components/All/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import Header from '../components/Header'
import LargeCard from '../components/All/LargeCard'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import Twemoji from '../components/Twemoji'
import styled from 'styled-components';

const list = ["Amoled yanması", "Isınma sorunu", "Şarj soketi sorunu", "Batarya sorunu", "Kamera sorunu"]

const ContactHeader = styled.div`
    background:${({ theme }) => theme.body};
    background:url('/assets/issue-bg.png');
    background-repeat:repat;
    background-size: 640px;
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

const IssueList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;

    @media only screen and (max-width: 1260px) {
        gap: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 960px) {
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const IssueItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    position: relative;

    border-radius:8px;
    
    height:190px;
    padding:2em 1em 1em 1em;

    background:${({ theme }) => theme.button_bg};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);

    p{
        color:${({ theme }) => theme.text};
        font-size:20px;
        text-align:center;
        line-height:1.2em;
        margin-top:1em;
    }

    @media only screen and (max-width: 1024px) {
        padding:1.2em 0.8em 1em 0.8em;
        height:143px;
        p{
            font-size:18px;
        }
    }

    @media only screen and (max-width: 960px) {
        height:140px;
    }
`


const Image = styled.img`
    width:48px;
    height:48px;
    filter:${props => props.isLight ? 'invert(0)' : 'invert(0.9)'};

    @media only screen and (max-width: 1024px) {
        width:36px;
        height:36px;
    }

    @media only screen and (max-width: 960px) {
    }

`
const IssueItem = ({ data, lang, isLight }) => {
    return (
        <ActiveLink href={`/issue/${data.slug}`}>
            <IssueItemContainer>
                <Image src={`data:image/svg+xml;utf8;base64, ${data.icon}`} isLight={isLight} />
                <p>{data.name[0][lang] ? data.name[0][lang] : data.name[0]["en"]}</p>
            </IssueItemContainer>
        </ActiveLink>
    )
}


const Issues = ({ t, language, isLight, toggleTheme, issues }) => {
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState('');
    const placeholder = list[Math.floor(Math.random() * list.length)];

    const handleSearch = async (value) => {
        // diğer tablodan slug çek
        setSearch(value)

    }

    useEffect(() => {
        const delay = setTimeout(async () => {
            setLoading(true)
            if (search.length > 3) {
                const res = await fetch(`${API_URL} issue / ${language} /${search}`)
                const data = await res.json()
                setSearchData(data)
            } else {
                setSearchData('')
            }
        }, 400)

        return () => clearTimeout(delay)
    }, [search])

    return (
        <>
            <Head>
                <title>{t('list')}</title>
            </Head>
            <Header isLight={isLight} toggleTheme={toggleTheme} />
            <ContactHeader>
                <h3><Twemoji style={{ marginRight: '0.5em' }} emoji="📖" />{t('list')}</h3>
                <Container style={{ marginTop: '1.5em' }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                </Container>
            </ContactHeader>
            <Container style={{ marginTop: '5em' }}>

                {!searchData ?
                    <IssueList>
                        {issues.map((item, id) => (
                            <IssueItem key={id} data={item} isLight={isLight} lang={language} />
                        ))}
                    </IssueList>
                    :
                    <div>
                        {JSON.stringify(searchData)}
                    </div>
                }
            </Container>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

Issues.getInitialProps = async ctx => {
    const res = await fetch(`${API_URL}issues`)
    const issues = await res.json()
    return { issues: issues }
}

export default withTranslation('issues')(Issues)