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
`
const Content = styled.div`
    padding:6vh 10vw;
    @media only screen and (max-width: 960px) {
        padding:2em;
    }

    .form-item{
        margin-bottom:2em;
    }

    .login{
        color:${light_colors.BUTTON_BLUE};
        margin-left:0.4em;
    }
    .already-member{
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
const Register = ({ t }) => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    console.log(name, password);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }
    return (
        <LoginContainer>
            <Left type="register" />
            <Right>
                <Content>
                    <Header>
                        <h1>{t('signin')}</h1>
                        <ActiveLink href="/login">
                            <h2>{t('login')}</h2>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9822 16.25H3.75V13.75H21.9822L14.1161 5.88389L15.8839 4.11612L26.7678 15L15.8839 25.8839L14.1161 24.1161L21.9822 16.25Z" fill="#7C7C7C" />
                            </svg>
                        </ActiveLink>
                    </Header>
                    <Form>
                        <Form.Group className="form-item" controlId="username">
                            <Form.Label>{t('username')}</Form.Label>
                            <Form.Control type="text" placeholder={t('username')} onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="form-item" controlId="name">
                            <Form.Label>{t('name')}</Form.Label>
                            <Form.Control type="text" placeholder={t('name')} onChange={e => setUserName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="form-item" controlId="email">
                            <Form.Label>{t('email')}</Form.Label>
                            <Form.Control type="email" placeholder={t('email')} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="form-item" controlId="username">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('password')} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="form-item" controlId="password">
                            <Form.Label>{t('repeatpassword')}</Form.Label>
                            <Form.Control type="password" placeholder={t('repeatpassword')} onChange={e => setRepeatPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {t('signin')}
                        </Button>
                        <div className="already-member">
                            <ActiveLink href="/login">
                                <span>{t('alreadymember')}</span>
                                <span className="login">{t('memberlogin')}</span>
                            </ActiveLink>
                        </div>
                    </Form>
                </Content>
            </Right>
        </LoginContainer>
    )
}

Register.getInitialProps = async () => ({
    namespacesRequired: ['login'],
})

export default withTranslation('login')(Register)
