import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../i18n'

import { API_URL } from '../helpers/urls'
import ActiveLink from '../components/ActiveLink'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Left from '../components/Login/Left'
import Loader from '../helpers/Loader'
import Toast from 'react-bootstrap/Toast'
import axios from 'axios';
import { light_colors } from '../helpers/colors'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

const RegisterContainer = styled.div`
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 740px) {
        flex-direction:column;
    }
`

const Right = styled.div`
    position:relative;
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

const CustomToast = (message) => {
    return (
        <Toast style={{ position: 'absolute', top: 100, left: "50%", right: "50%", transform: "translate(-50%, -50%)" }}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    )
}

const Register = ({ t, isAuth }) => {
    const router = useRouter()
    if (isAuth) {
        router.push("/dashboard")
        return <Loader />
    }
    const { register, handleSubmit, watch, errors } = useForm();

    const [loading, setLoading] = useState(false);
    const [usernameIsAvailable, setUsernameIsAvailable] = useState();
    const [responseError, setResponseError] = useState();

    const onSubmit = data => {
        console.log(data)
        const { name, username, email, password } = data
        axios.post(`${API_URL}auth/local/register`, {
            name,
            username,
            email,
            password,
        }).then(res => {
            console.log(res)
            const { data } = res
            if (res.status == 400) {
                setResponseError(res.message)
            } else {
                // CALL AUTH FUNC - REDIRECT TO DASHBOARD
                console.log('User profile', data.user);
                console.log('User token', data.jwt);
            }
        }).catch((error) => {
            setResponseError(error)
        })
    }

    const handleUserName = (username) => {
        setUserName(username)
        const delay = setTimeout(async () => {
            setLoading(true)
            if (username.length > 3) {
                const res = await fetch(`${API_URL}users/username=${username}`)
                const json = await res.json()
                setUsernameIsAvailable(json.isAvailable)
            }
            setLoading(false)
        }, 400)
        return () => clearTimeout(delay)
    }
    return (
        <RegisterContainer>
            <Left type="register" />
            <Right>
                {responseError && <CustomToast message={responseError} />}
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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="form-item" >
                            <Form.Label>{t('name')}</Form.Label>
                            <Form.Control
                                isValid={watch("name")}
                                isInvalid={errors.name}
                                ref={register({ required: t('namerequired'), maxLength: 20 })}
                                name="name"
                                placeholder={t('name')} />

                            {errors.name && <Form.Control.Feedback type="invalid">{t('namerequired')}</Form.Control.Feedback>}

                        </Form.Group>
                        <Form.Group className="form-item" >
                            <Form.Label>{t('username')}</Form.Label>
                            <Form.Control
                                isValid={usernameIsAvailable}
                                isInvalid={errors.name}
                                ref={register} name="username" placeholder={t('username')} />
                            {usernameIsAvailable && usernameIsAvailable.length ?
                                usernameIsAvailable ?
                                    <Form.Text className="text-muted">
                                        kullanılabilir
                                    </Form.Text>
                                    :
                                    <Form.Text className="text-muted">
                                        kullanılamaz
                                    </Form.Text>
                                :
                                <Form.Text className="text-muted">
                                    kontrol edilmedi
                                </Form.Text>
                            }
                        </Form.Group>
                        <Form.Group className="form-item" >
                            <Form.Label>{t('email')}</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                isInvalid={errors.email}
                                ref={register({
                                    required: t('emailrequired'),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                                placeholder={t('email')} />
                            {errors.email && <Form.Control.Feedback type="invalid">{errors.email.type == "required" ? t('emailrequired') : t('invalidemail')}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="form-item">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                isValid={watch("password")}
                                isInvalid={errors.password}
                                ref={register({
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}
                                isValid={watch('password') && watch('password').length > 8 && !errors.password}
                                placeholder={t('password')} />
                            {errors.password && <Form.Control.Feedback type="invalid">{errors.password.type == "required" ? t('passwordrequired') : t('passwordlength')}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="form-item">
                            <Form.Label>{t('repeatpassword')}</Form.Label>
                            <Form.Control
                                name="repeatpassword"
                                type="password"
                                ref={register({
                                    validate: value =>
                                        value === watch("password") || "The passwords do not match"
                                })}
                                isValid={watch("repeatpassword")}
                                isInvalid={errors.repeatpassword}
                                placeholder={t('repeatpassword')} />
                            {errors.repeatpassword && <Form.Control.Feedback type="invalid">{t('passwordmatch')}</Form.Control.Feedback>}
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
        </RegisterContainer>
    )
}

Register.getInitialProps = async () => ({
    namespacesRequired: ['login'],
})

export default withTranslation('login')(Register)
