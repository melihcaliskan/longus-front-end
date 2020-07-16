import { API_URL, API_URL_W } from '../../../helpers/urls'
import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Issue from "../../../components/Issue"
import ItemHeader from "../../../components/Detail/Header"
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast'
import { handlePhoto } from '../../../helpers/functions'
import styled from 'styled-components';
import { withTranslation } from '../../../i18n'

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
    align-items:center;
    justify-content:center;
    
    margin-top:3em;

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

const Detail = ({ device, userData, t, isAuth, isMobile, theme, language }) => {
    const { id, name, slug, device_issues, photo } = device

    const [showToast, setShowToast] = useState(false)

    const handleToast = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000);
    }

    const goComments = () => {

    }
    if (device.statusCode == 404) {
        // Build aldıktan sonra Next.js bizim yerimize 404 sayfasına yönlendiriyor.
    }

    return (
        <Fade duration={600}>
            <Head>
                <title>{name}</title>
                <meta name="og:type" content="website" />
                <meta name="description" content={name} />
                <meta name="og:title" content={name} />
                <meta name="description" content={name} />
                <meta name="keywords" content={name} />
                <meta name="og:url" content={name} />
                <meta name="og:description" content={name} />
            </Head>
            <DetailContainer>
                <ItemHeader
                    name={name}
                    photo={handlePhoto(photo)}
                    count={{ issue: device_issues && device_issues.length ? device_issues.length : 0, comment: device.comments?.length }}
                    fit={device_issues && device_issues.length > 0 ? device_issues[0].effect_on_usability : 10}
                    isMobile={isMobile}
                />
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
                    <br />
                    <hr />
                    <List>
                        <ListText>
                            {device_issues && device_issues.length > 0 ?
                                `${device_issues.length} ${t('issues')}`
                                : <center>{t('noissue')}</center>
                            }
                        </ListText>
                        {device_issues && device_issues.length > 0 && device_issues.map((item, index) => (
                            <Issue isAuth={isAuth} deviceId={id} slug={slug} data={item} userData={userData} key={index} theme={theme} lang={language} />
                        ))}
                    </List>
                </Container>
            </DetailContainer>
        </Fade>
    )
}

Detail.getInitialProps = async ({ res, query, err }) => {
    const namespacesRequired = ["detail"];

    const response = await fetch(`${API_URL}devices?slug=${query.slug}`)
    const device = await response.json()

    const user_id = device[0] && device[0].device_issues && device[0].device_issues.length && device[0].device_issues[0].user
    const response_two = await fetch(`${API_URL}users/${user_id}`)
    const userData = await response_two.json()
    delete userData.device_issues

    return { namespacesRequired, device: device[0], userData: userData, query }
}

export default withTranslation('detail')(Detail)