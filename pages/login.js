import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import {
    isBrowser,
    isMobile
} from "react-device-detect";

import ActiveLink from '../components/ActiveLink'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Icon } from "@blueprintjs/core"
import Issue from "./issue"
import Left from '../components/Login/Left'
import Row from 'react-bootstrap/Row'
import { light_colors } from '../helpers/colors'
import styled from 'styled-components'

const LoginContainer = styled.div`
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 740px) {
        flex-direction:column;
    }
`

const Right = styled.div`
    width:100%;
    background:${({ theme }) => theme.body};
    
`
const Content = styled.div`
    padding:${props => props.noSidebar ? '2em' : '20vh 10vw'};
    
    @media only screen and (max-width: 960px) {
        padding:2em;
    }

    .form-item{
        margin-bottom:2em;
    }

    .forgot{
        color:${light_colors.BUTTON_BLUE};
        margin-top:2em;
    }
`

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:3em;

    h1{
        font-weight:700;
        margin-right:1em;
    }

    a {
        display:flex;
        h2{
            font-size:26px;
            font-weight:600;
            margin-right:0.4em;
            color:${light_colors.LOGIN_GRAY_TEXT}
        }
    }

    @media only screen and (max-width: 960px) {
        margin-bottom:2em;
    }
    @media only screen and (max-width: 740px) {
        margin-bottom:2em;
        h1{
            font-size:30px;
        }
        a {
            h2{
                font-size:22px;
            }
            ${"svg"}{
                transform:scale(0.8)
            }
        }
    }
`
const Login = ({ t, noSidebar = false, background }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    console.log(noSidebar, name, password);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    //${({ theme }) => theme.dark_text};

    return (
        <LoginContainer>
            {!noSidebar ?
                <Left type="login" />
                : null
            }
            <Right background={background}>
                <Content noSidebar={noSidebar}>
                    <Header>
                        <h1>{t('login')}</h1>
                        <ActiveLink href="/register">
                            <h2>{t('signin')}</h2>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9822 16.25H3.75V13.75H21.9822L14.1161 5.88389L15.8839 4.11612L26.7678 15L15.8839 25.8839L14.1161 24.1161L21.9822 16.25Z" fill="#7C7C7C" />
                            </svg>
                        </ActiveLink>
                    </Header>
                    <Form>
                        <Form.Group className="form-item" controlId="username">
                            <Form.Label>{t('usernameoremail')}</Form.Label>
                            <Form.Control type="email" placeholder={t('usernameoremail')} onChange={e => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="form-item" controlId="password">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('password')} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {t('login')}
                        </Button>
                        <ActiveLink href="/forgot">
                            <p className="forgot">{t('forgot')}</p>
                        </ActiveLink>
                    </Form>
                </Content>
            </Right>
        </LoginContainer>
    )
}
Login.getInitialProps = async () => ({
    namespacesRequired: ['login'],
})

export default withTranslation('login')(Login)