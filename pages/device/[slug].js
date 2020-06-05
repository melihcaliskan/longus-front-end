import { API_URL, API_URL_W } from '../../helpers/urls'
import React, { useEffect, useState } from 'react';

import Button from '../../components/Button'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer'
import Head from 'next/head'
import Header from '../../components/Header'
import Issue from "../../components/Issue"
import ItemHeader from "../../components/Detail/Header"
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast'
import styled from 'styled-components';
import useWindowSize from "../../helpers/windowSize"
import { withTranslation } from '../../i18n'

const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`
const Find = styled.h2`
    font-size:30px;
    font-weight:700;
    margin-bottom:0.4em;
    text-align:center;
    padding:0 1em;
    line-height:1.4em;
`
const Add = styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    justify-content:center;
    align-items:center;
`
const List = styled.div`
    margin-top:3em;
    @media only screen and (max-width: 960px) {
        padding:1em;
    }
`
const ListText = styled.h3`
    font-weight:800;
    font-size:34px;
    margin-bottom:1em;
    @media only screen and (max-width: 960px) {
        font-size:28px;
    }
`

const ToastContainer = styled.div`
    z-index:1;
    width:500px;
    position: fixed;
    top:${props => props.height - 140}px;
    right:50px;

    @media only screen and (max-width: 960px) {
        width:260px;
        top:${props => props.height - 100}px;
        right:10px;
    }
`
/*
const CustomToast = ({ isShow }) => {
    const [show, setShow] = useState(true);
    const size = useWindowSize();
    useEffect(() => {
        setShow(isShow)
    })
    return (
        <ToastContainer as={Toast} show={show} autohide height={size.height} delay={1500} onClose={() => setShow(false)}>
            <Toast.Header>
                <img
                    onClick={() => setShow(false)}
                    src="assets/favicon.ico"
                    className="rounded mr-2"
                    width={15}
                />
                <strong className="mr-auto">Başarılı!</strong>
                <small>Şimdi</small>
            </Toast.Header>
            <Toast.Body style={{ marginLeft: '0.8em', color: '#464646' }}>Başarıyla oy verildi.</Toast.Body>
        </ToastContainer>
    )
    
    <CustomToast isShow={showToast} />
}
*/
const Detail = ({ device, t, isMobile, isLight, toggleTheme, theme }) => {
    const [showToast, setShowToast] = useState(false)

    const handleToast = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000);
    }
    return (
        <Fade duration={600}>
            <Head>
                <title>{device.name}</title>
                <meta name="og:type" content="website" />
                <meta name="description" content={device.name} />
                <meta name="og:title" content={device.name} />
                <meta name="description" content={device.name} />
                <meta name="keywords" content={device.name} />
                <meta name="og:url" content={device.name} />
                <meta name="og:description" content={device.name} />
            </Head>
            <DetailContainer>
                <Header isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
                <ItemHeader
                    name={device.name}
                    photo={API_URL_W +
                        (device.photo.formats.large ?
                            device.photo.formats.large.url :
                            device.photo.formats.small ?
                                device.photo.formats.small.url :
                                device.photo.formats.thumbnail.url
                        )}
                    count={{ issue: device.issues.length, comment: 0 }}
                    fit={3}
                    isMobile={isMobile}
                />
                <br /><br />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2" />
                        <Col md="auto">
                            <Fade bottom duration={200} distance={'1em'}>
                                <Add>
                                    <Find>{t('find')}</Find>
                                    <Button type="primary" href="/add">
                                        {t('add')}
                                    </Button>
                                </Add>
                            </Fade>
                        </Col>
                        <Col xs lg="2" />
                    </Row>
                    <List>
                        <ListText>
                            {`${device.issues.length} ${t('issues')}`}
                        </ListText>
                        <Issue theme={theme} />
                        <Issue theme={theme} resolved />
                        <Issue theme={theme} />
                    </List>
                </Container>
            </DetailContainer>
            <Footer />
        </Fade>
    )
}

Detail.getInitialProps = async ({ res, query, err }) => {
    const namespacesRequired = ["detail"];

    console.log(query)

    const response = await fetch(`${API_URL}devices/${query.slug}`)
    const device = await response.json()
    return { namespacesRequired, device: device }
}

export default withTranslation('detail')(Detail)