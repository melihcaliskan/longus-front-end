import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import { API_URL } from '../helpers/urls'
import ActiveLink from '../components/ActiveLink'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Left from '../components/Login/Left'
import Loader from '../helpers/Loader'
import { light_colors } from '../helpers/colors'
import { setLogin } from '../helpers/auth'
import styled from 'styled-components'
import { useRouter } from 'next/router'

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

const Back = styled.h3`
        font-size:24px;
        color:${({ theme }) => theme.detail_text};
        padding:5vh 10vw;
        svg{
            margin-right:1em;
            path{
                fill:${({ theme }) => theme.detail_text};
            }
        }
    
`
const Content = styled.div`
    padding:${props => props.noSidebar ? '2em' : '10vh 10vw'};
    
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
const Login = ({ t, isAuth, noSidebar = false, background }) => {
    const router = useRouter()
    if (isAuth) {
        router.push("/dashboard")
        return <Loader />
    }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setLogin("testuser", "testuser")
        router.push("/dashboard")
        /*
        fetch(`${API_URL}auth/local`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: name, password: password })
        }).then(response => response.json()).then(data => {
            if (data.jwt) {
                alert("Giriş başarılı")
            } else {
                if (data.message[0].messages[0].id == "Auth.form.error.invalid") {
                    setError(t('passworderror'))
                } else {
                    setError(t('somethingwrong'))
                }
                console.log(data.message[0].messages[0].id)
            }
        });
        */
    }

    return (
        <LoginContainer>
            {!noSidebar ?
                <Left type="login" />
                : null
            }
            <Right background={background}>
                {!noSidebar ?
                    <ActiveLink href="/">
                        <Back>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.41412 13L12.707 19.2928L11.2928 20.7071L2.58569 12L11.2928 3.29285L12.707 4.70706L6.41412 11H20.9999V13H6.41412Z" fill="black" />
                            </svg>
                            {t('backtohome')}
                        </Back>
                    </ActiveLink>
                    : null
                }
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
                    {error ?
                        <Alert style={{ marginBottom: '3em' }} variant={"danger"}>
                            {error}
                        </Alert>
                        : null}
                    <Form>
                        <Form.Group className="form-item" controlId="username">
                            <Form.Label>{t('usernameoremail')}</Form.Label>
                            <Form.Control placeholder={t('usernameoremail')} onChange={e => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="form-item" controlId="password">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('password')} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
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