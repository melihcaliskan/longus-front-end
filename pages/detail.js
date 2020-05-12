import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../components/Button'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
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
    font-size:25px;
    margin-bottom:2em;
`

const Detail = ({ t, theme }) => {
    return (
        <Fade duration={600}>
            <DetailContainer>
                <Header />
                <br /><br />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2" />
                        <Col md="auto">
                            <Fade bottom duration={200} distance={'1em'}>
                                <Add>
                                    <Find>{t('find')}</Find>
                                    <Button type="primary" href="/">
                                        {t('add')}
                                    </Button>
                                </Add>
                            </Fade>
                        </Col>
                        <Col xs lg="2" />
                    </Row>
                    <List>
                        <ListText>
                            {`3 ${t('issues')}`}
                        </ListText>
                        <Issue theme={theme} />
                        <Issue theme={theme} resolved />
                        <Issue theme={theme} />
                    </List>
                </Container>
            </DetailContainer>
        </Fade>
    )
}

Detail.getInitialProps = async () => ({
    namespacesRequired: ['detail'],
})

export default withTranslation('detail')(Detail)
