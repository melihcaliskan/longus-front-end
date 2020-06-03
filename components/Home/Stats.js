import Container from 'react-bootstrap/Container'
import React from 'react';
import Twemoji from '../Twemoji';
import styled from 'styled-components';
import { withTranslation } from '../../i18n'

const Title = styled.h2`
    font-size:48px;
    font-weight:700;
    line-height:1.4em;
    width:480px;
    @media only screen and (max-width: 960px) {
        font-size:28px;
    }
`

const Low = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    
    background:${({ theme }) => theme.effect_low};
    width:200px;
    height:200px;
    border-radius:50%;
    box-shadow: 0px 2px 15px 0px ${({ theme }) => theme.effect_low};
    @media only screen and (max-width: 960px) {
        width:160px;
        height:160px;
    }
`
const Medium = styled.div`
    position:absolute;
    top:-10px;
    right:-90px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    
    background:${({ theme }) => theme.effect_medium};
    width:140px;
    height:140px;
    border-radius:50%;
    box-shadow: 0px 2px 15px 0px ${({ theme }) => theme.effect_medium};
    @media only screen and (max-width: 960px) {
        top:0px;
        right:-70px;
        width:100px;
        height:100px;
    }
`

const High = styled.div`
    position:absolute;
    bottom:0;
    right:-40px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    
    background:${({ theme }) => theme.effect_high};
    width:100px;
    height:100px;
    border-radius:50%;
    box-shadow: 0px 2px 15px 0px ${({ theme }) => theme.effect_high};

    @media only screen and (max-width: 960px) {
        right:-30px;
        width:80px;
        height:80px;
    }
`
const MeatballContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 1em 7vw 1em 0;
    @media only screen and (max-width: 960px) {
        padding:0;
    }
`
const CustomContainer = styled.div`
    padding:3em 0;
    overflow: hidden;
    @media only screen and (max-width: 960px) {
        padding:1em 4em 1em 1.5em;
    }
`

const CountContainer = styled.div`  
    margin-top:3em;
    padding-right:3em;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    div{
        display:flex;
        align-items:center;
    }
`
const Emoji = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    width:200px;
    height:200px;
    border-radius:50%;
    background:${({ theme }) => theme.body_200};
    span{
        font-size:96px;
    }
    @media only screen and (max-width: 960px) {
        width:90px;
        height:90px;
        border-radius:50%;
        span{
            font-size:48px;
        } 
    }
`

const CircleContainer = styled.div`
    display:inline-flex;
    position:relative;
    strong{
        color:${({ theme }) => theme.dark_text_200};
        font-size:32px;
    }
    p{
        color:${({ theme }) => theme.dark_text_300};
        font-size:18px;
    }
    @media only screen and (max-width: 960px) {
        strong{
            font-size:24px;
        }
        p{
            font-size:16px;
        }
    }
`

const CountItem = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;

    &:first-child{
        margin-right:6em;
    }    
    strong{
        color:${({ theme }) => theme.body_700};
        font-size:64px;
    }
    p{
        font-size:32px;
        color:${({ theme }) => theme.body_600};
    }

    @media only screen and (max-width: 960px) {
        &:first-child{
            margin-right:3em;
        }  
        strong{
            font-size:32px;
        }
        p{
            font-size:20px;
        }
    }
`
const Bg = styled.div`
    padding:1em 0 1.3em 0;
    background-color: ${({ theme }) => theme.body_100};
    mask-image: url("assets/stat-bg.svg");
    -webkit-mask-image: url("assets/stat-bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom:5em;
`

const Stats = ({ t, theme }) => {
    return (
        <Bg>
            <CustomContainer as={Container}>
                <MeatballContainer>
                    <Title>
                        <Twemoji style={{ marginRight: '0.5em' }} emoji="🚀" />
                        {t('growing')}
                    </Title>
                    <CircleContainer>
                        <Low>
                            <strong>100+</strong>
                            <p>{t('low')}</p>
                        </Low>
                        <Medium>
                            <strong>50+</strong>
                            <p>{t('medium')}</p>
                        </Medium>
                        <High>
                            <strong>10+</strong>
                            <p>{t('high')}</p>
                        </High>
                    </CircleContainer>
                </MeatballContainer>

                <CountContainer>
                    <Emoji>
                        <Twemoji emoji="🙋‍♀️" />
                    </Emoji>
                    <div>
                        <CountItem>
                            <strong>20+</strong>
                            <p>{t('device')}</p>
                        </CountItem>
                        <CountItem>
                            <strong>100+</strong>
                            <p>{t('user')}</p>
                        </CountItem>
                    </div>
                </CountContainer>
            </CustomContainer>
        </Bg>
    )
}

Stats.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(Stats)