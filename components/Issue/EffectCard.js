import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';

const EffectCardContainer = styled.div`
    margin-bottom:2em;
    display:flex;
    align-items:center;
    @media only screen and (max-width: 960px) {
        margin-bottom:1em;
    }
`

const Tabs = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:2em;
`

const TabItem = styled.div`
    display:inline-flex;
    position:relative;
    width:64px;
    height:64px;
    border-radius:50%;
    cursor:pointer;
    background:${props => props.active ? props.theme.darken_body : props.value == 1 ? props.theme.effect_low : props.value == 2 ? props.theme.effect_medium : props.theme.effect_high};
    box-shadow: ${props => props.active ? '0px 4px 3px 0px rgba(0, 0, 0, 0.15)' : 'initial'};
    justify-content: center;
    align-items: center;
    
    transition:all .2s;

    margin-bottom: 1em;
    &:after {
        content:"";
        position:absolute;
        right:-5px;
        top:25px;
        width:16px;
        height:16px;
        background:${props => props.active ? props.theme.darken_body : props.value == 1 ? props.theme.effect_low : props.value == 2 ? props.theme.effect_medium : props.theme.effect_high};
        border-left:none;
        border-bottom:none;
        transform:rotate(45deg);
        -webkit-transform:rotate(45deg);
        user-select:none;
        -webkit-user-select: none;

        left:${props => props.active ? '54px' : '45px'};
        opacity:${props => props.active ? 1 : 0};
        transition:all .2s;


    }
    @media only screen and (max-width: 960px) {
        width:48px;
        height:48px;
        svg{
            transform:scale(0.75)
        }
        &:after {
            left:43px;
            top:20px;
            width:10px;
            height:10px;
        }
    }

    svg path{
        fill:${props => props.active ? props.theme.text : props.theme.dark_text};
    }
`
const Title = styled.h2`
    font-size:21px;
    margin-bottom:2em;
    font-weight:700;
    @media only screen and (max-width: 320px) {
        font-size:18px;
    }
    `

const TabContent = styled.div`
`
const ChartContainer = styled.div`
    position:relative;
    
    div{
        margin-top:0.6em;
        padding:0 0.1em;
        display:flex;
        justify-content:space-between;

        p{
            font-size:14px;
            color:${({ theme }) => theme.c_text};
        }
    }
    @media only screen and (max-width: 320px) {
        transform:scale(0.8);
        margin-left:-2em;
    }
`
const Chart = styled.div`
    width:250px;
    height:10px;
    border-radius:1em;
    background: rgb(23,198,113);
    background: linear-gradient(90deg, rgba(23,198,113,1) 0%, rgba(255,180,0,1) 50%, rgba(196,24,60,1) 100%);
`
const Slider = styled.div`
    position:absolute;
    top:-16px;
    left:${props => props.value > 90 ? '90%' : props.value + '%'};
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${({ theme }) => theme.light_bg};
    box-shadow:0px 4px 3px 0px rgba(0, 0, 0, 0.15);
    transition:all .6s ease-in-out;
    `

const EffectCard = ({ t, theme, usageEffect, repeatFreq }) => {
    const [index, setIndex] = useState(1);
    return (
        <EffectCardContainer>
            <Tabs>
                <TabItem value={2} active={index == 1} onClick={() => setIndex(1)}>
                    <UsageSvg />
                </TabItem>
                <TabItem value={1} active={index == 2} onClick={() => setIndex(2)}>
                    <FreqSvg />
                </TabItem>
            </Tabs>
            <TabContent>
                {index == 1 ?
                    <Title>{t('effect')}</Title>
                    :
                    <Title>{t('repeat_frequency')}</Title>
                }
                <ChartContainer>
                    <Chart />
                    <Slider value={index == 1 ? 40 : 20} />
                    <div>
                        <p>{t('low')}</p>
                        <p>{t('high')}</p>
                    </div>
                </ChartContainer>
            </TabContent>
        </EffectCardContainer>
    )
}

const SelectedTabBg = () => {
    return (
        <svg width="75" height="64" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M62.5998 41.3913C58.5871 54.4817 46.4051 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C46.8407 0 59.3218 10.1026 62.9412 23.8058L73.5 29.9019C75.5 31.0566 75.5 33.9434 73.5 35.0981L62.5998 41.3913Z" fill="#EFEFEF" />
        </svg>

    )
}

const UsageSvg = () => {
    return (
        <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.59753 29.6992C2.47569 26.6024 0 21.7555 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 33 7.3873 33 16.5C33 21.7555 30.5243 26.6024 26.4025 29.6992L26.0022 30H6.99784L6.59753 29.6992ZM24.9862 27C28.1295 24.4575 30 20.6355 30 16.5C30 9.04416 23.9558 3 16.5 3C9.04416 3 3 9.04416 3 16.5C3 20.6355 4.87047 24.4575 8.0138 27H24.9862ZM24.4789 8.36016L22.0212 6.63977L18.0716 12.282C17.5823 12.0997 17.0528 12 16.5 12C14.0147 12 12 14.0147 12 16.5C12 18.9853 14.0147 21 16.5 21C18.9853 21 21 18.9853 21 16.5C21 15.6668 20.7736 14.8865 20.3789 14.2173L24.4789 8.36016ZM18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z" fill="black" />
        </svg>

    )
}

const FreqSvg = () => {
    return (
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.8207 1.98123L19.0343 5.19483H7.0047C3.13611 5.19483 0 8.33095 0 12.1995V16.4024H2.80188V12.1995C2.80188 9.87838 4.68354 7.99671 7.0047 7.99671H19.0315L15.8207 11.2075L17.8019 13.1887L24.3963 6.59437L17.8019 0L15.8207 1.98123ZM9.39612 28.0188L6.18392 24.8066H18.2121C22.0807 24.8066 25.2168 21.6705 25.2168 17.8019V13.5991H22.4149V17.8019C22.4149 20.123 20.5332 22.0047 18.2121 22.0047H6.18392L9.39612 18.7925L7.4149 16.8113L0.820526 23.4056L7.4149 30L9.39612 28.0188Z" fill="black" />
        </svg>
    )
}

EffectCard.getInitialProps = async () => ({
    namespacesRequired: ['issue_card'],
})

export default withTranslation('issue_card')(EffectCard)