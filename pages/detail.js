import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import {
    isBrowser,
    isMobile
} from "react-device-detect";

import Button from '../components/Button'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from "./header"
import { Icon } from "@blueprintjs/core";
import Issue from "./issue"
import Row from 'react-bootstrap/Row';
import { light_colors } from '../helpers/colors'
import styled from 'styled-components';

const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const Find = styled.h2`
    font-size:30px;
    font-weight:700;
    margin-bottom:1.3em;
`

const Add = styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    justify-content:center;
    align-items:center;
`
const List = styled.div`
    margin-top:5em;
`
const ListText = styled.h3`
    font-weight:700;
    font-size:22px;
    margin-bottom:2em;
`

const Detail = ({ t }) => {
    return (
        <DetailContainer>
            <Header />
            <Container style={{ marginTop: !isMobile ? '22em' : '3em' }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="2" />
                    <Col md="auto">
                        <Add>
                            <Find>{t('find')}</Find>
                            <Button type="primary" href="/">
                                {t('add')}
                            </Button>
                        </Add>
                    </Col>
                    <Col xs lg="2" />
                </Row>
                <List>
                    <ListText>
                        {`3 ${t('issues')}`}
                    </ListText>
                    <Issue />
                    <Issue resolved />
                    <Issue />
                </List>
            </Container>
        </DetailContainer>
    )
}

Detail.getInitialProps = async () => ({
    namespacesRequired: ['detail'],
})

export default withTranslation('detail')(Detail)
