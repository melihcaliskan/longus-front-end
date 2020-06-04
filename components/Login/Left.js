import ActiveLink from '../ActiveLink'
import React from 'react';
import styled from 'styled-components'
import { withTranslation } from '../../i18n'

const Left = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:40vw;
    height:100vh;
    padding:30vh 1em 1em 1em;
    background: rgb(64,156,255);
    background-image:${({ theme }) => `url("assets/login-bg-pattern.png"),linear-gradient(to bottom, ${theme.login_gradient_first},${theme.login_gradient_second});`};
    
    @media only screen and (max-width: 740px) {
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
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    ${"*:not(:last-child)"} {
        margin-bottom:0.4em;
        margin-right: 5px;
    }

    .info{
        font-size:20px;
        font-weight:600;
        span {
            color:${({ theme }) => theme.dark_text} !important;
        }
    }

    .links a{
        color:${({ theme }) => theme.dark_400_text} !important;
    }

    @media only screen and (max-width: 740px) {
        display:none;
    }
`

const Brand = styled.h2`
    color:white;
    font-size:64px;
    font-weight:700;
    @media only screen and (max-width: 960px) {
       font-size:48px;
    }
    @media only screen and (max-width: 740px) {
       font-size:36px;
    }
`

const Description = styled.h3`
    color:white;
    font-size:22px;
    margin-top:3em;
    @media only screen and (max-width: 960px) {
        font-size:20px;
    }
    @media only screen and (max-width: 960px) {
        margin-top:1em;
    }
`
const LeftContainer = ({ t, type }) => {
    return (
        <Left>
            <Top>
                <ActiveLink href="/">
                    <Brand>{t('brand')}</Brand>
                </ActiveLink>
                <Description>
                    {type == "login" ? t('logindescription') : t('registerdescription')}
                </Description>
            </Top>
            <Footer>
                <div className="info">
                    <span>{t('footer.year')}</span>
                    <span> {t('footer.allrightsreserved')}</span>
                </div>
                <div className="links">
                    <ActiveLink href="/about">
                        {t('footer.about')}
                    </ActiveLink>
                    <ActiveLink href="/contact">
                        {t('footer.contact')}
                    </ActiveLink>
                </div>
            </Footer>
        </Left>
    )
}

LeftContainer.getInitialProps = async () => ({
    namespacesRequired: ['login'],
})

export default withTranslation('login')(LeftContainer)