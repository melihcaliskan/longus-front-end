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

const LoginContainer = styled.div`
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 960px) {
        flex-direction:column;
    }
`
const Left = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:40vw;
    height:100vh;
    padding:30vh 1em 1em 1em;
    background: rgb(64,156,255);
    background-image:url("assets/login-bg-pattern.png"),linear-gradient(to bottom, rgba(63,156,255, 1),rgba(120,220,255, 100));
    @media only screen and (max-width: 960px) {
        width:100vw;
        height:22vh;
        padding:0;
        justify-content:center;
        align-items:center;
        background-image:url("assets/login-bg-pattern.png"),linear-gradient(to right, rgba(63,156,255, 1),rgba(120,220,255, 100));
    }
`

const Top = styled.div`
    padding:0 5vw;
`

const Footer = styled.div`
    padding:0 5vw;
    @media only screen and (max-width: 960px) {
        display:none;
    }
`

const Right = styled.div`
    width:100%;
    height:100vh;
    @media only screen and (max-width: 960px) {
        flex-direction:column;
    }
`

const Brand = styled.h2`
    color:white;
    font-size:64px;
    font-weight:700;
    @media only screen and (max-width: 960px) {
       font-size:36px;
    }
`

const Description = styled.h3`
    color:white;
    font-size:22px;
    margin-top:3em;
    @media only screen and (max-width: 960px) {
        margin-top:1em;
    }
`

const Login = ({ t }) => {
    return (
        <LoginContainer>
            <Left>
                <Top>
                    <Brand>{t('brand')}</Brand>
                    <Description>
                        {t('description')}
                    </Description>
                </Top>
                <Footer>
                    {t('footer.year')}
                    {t('footer.allrightsreserved')}
                    {t('footer.about')}
                    {t('footer.contact')}
                </Footer>
            </Left>
            <Right>
                <button
                    type='button'
                    onClick={() => i18n.changeLanguage('tr')}>
                    tr
            </button>
                <button
                    type='button'
                    onClick={() => i18n.changeLanguage('en')}>
                    en
            </button>
                Content
            </Right>
        </LoginContainer>
    )
}

Login.getInitialProps = async () => ({
    namespacesRequired: ['login'],
})

export default withTranslation('login')(Login)