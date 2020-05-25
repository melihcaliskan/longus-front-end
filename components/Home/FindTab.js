import { Calculator, Camera, Case, Delivery, FlashCard, MemoryCard, Mic, Monitor, Video, Watch, İPhone } from '../svg/find/index'
import { Link, i18n, withTranslation } from '../../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../Button'
import Card from "../Home/Card"
import Col from 'react-bootstrap/Col'
import Lightning from "../svg/Lightning"
import { Tabs as Loader } from '../Loaders/Tabs'
import LocationNo from "../svg/LocationNo"
import Phone from "../svg/Phone"
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.button_bg};
    border-radius:7px;
    
    margin:0 1em;
    padding:1em;
    
    min-width:460px;

    h3{
        font-weight:700;
        font-size:35px;
        padding:0.2em;
    }
    @media only screen and (max-width: 960px) {
        min-width:0;
        
        h3{
            font-size:25px;
        }
    }
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
`

const Top = styled.div`
    display:flex;
    align-items:center;
`

const ItemContainer = styled.div`
    background:${({ theme }) => theme.blank};
    padding:2em 2em 1em 2em;
    margin-top:1.5em;
    border-radius:7px;

    overflow-y:scroll;
    max-height:480px;
    @media only screen and (max-width: 960px) {
        overflow-y:auto;
    }
    
`

const Brand = styled.h4`
    color:${({ theme }) => theme.light_brand};
    text-transform:uppercase;
    font-weight:800;
    font-size:16px;
    @media only screen and (max-width: 960px) {
        font-size:14px;
    }
`
const ProductName = styled.h2`
    color:${({ theme }) => theme.title};
    font-weight:800;
    font-size:36px;
    margin-top:0.2em;
    @media only screen and (max-width: 960px) {
        font-size:28px;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-self: flex-start;
    flex-direction:row-reverse;
    justify-content:flex-end;
    margin-left:0.5em;
    `


const User = styled.div`
    width:16px;
    height:16px;
    border-radius:50%;
    background: ${({ theme }) => theme.scrollbar_dark};
    border: ${({ theme }) => `2px solid ${theme.scrollbar_hover}`};
    margin-right:-0.4em;
`
const Body = styled.div`
`


const Join = styled.div`
    background: ${({ theme }) => theme.button_bg};
    border-radius:5px;
`

const Action = styled.div`
    background: ${({ theme }) => theme.VERY_LIGHT_GREEN};
    padding:0.4em 1em;
    text-align:center;
    text-transform:uppercase;
    font-weight:800;
    color: ${({ theme }) => theme.text};
    @media only screen and (max-width: 960px) {
        font-size:14px;
        padding:0.2em 0.5em;
    }
`

const Count = styled.h2`
    text-align:center;
    font-weight:800;
    margin:0.3em;
    @media only screen and (max-width: 960px) {
       font-size:26px;
    }
`

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    
    margin-bottom: ${props => props.last ? 0 : '2em'};
`

const SvgContainer = styled.div`
    display:flex;
    margin-top:1.4em;
    justify-content:space-between;
    padding:0 0.4em;
    svg path{
        fill: ${({ theme }) => theme.detail_text};
    }
`

const device_data = [
    {
        id: 22,
        brand: "Samsung",
        name: "Note 10",
        url: "isinma-sorunu",
        img: "https://i.picsum.photos/id/223/400/600.jpg",
    },
    {
        id: 2222,
        brand: "Apple",
        name: "iPhone 11",
        url: "gps-sorunu",
        img: "https://i.picsum.photos/id/223/400/600.jpg",
    },
    {
        id: 225,
        brand: "Meizu",
        name: "Note 6T",
        url: "isinma-sorunu",
        img: "https://i.picsum.photos/id/223/400/600.jpg",
    },
    {
        id: 226,
        brand: "Redmi",
        name: "Note 9",
        url: "gps-sorunu",
        img: "https://i.picsum.photos/id/223/400/600.jpg",
    },
    {
        id: 722,
        brand: "Huawei",
        name: "Mate 20",
        url: "kamera-sorunu",
        img: "https://i.picsum.photos/id/223/400/600.jpg",
    }
]

const List = ({ data, count }) => {
    return (
        <div>
            {data.slice(0, count).map((item, index) => (
                <a key={item.id} href={item.url}>
                    <Item last={data.slice(0, count).length == index + 1}>
                        <Body>
                            <Top>
                                <Brand>{item.brand}</Brand>
                                <UserContainer>
                                    {Array(10).fill(1).map((el, i) =>
                                        <User />
                                    )}
                                </UserContainer>
                            </Top>
                            <ProductName>{item.name}</ProductName>
                        </Body>
                        <Join>
                            <Action>
                                Katıl
                            </Action>
                            <Count>
                                {Math.floor(Math.random() * 100)}
                            </Count>
                        </Join>
                    </Item>
                </a>
            ))
            }
        </div >
    )
}

const CustomTab = ({ t, theme, count }) => {
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState('issues');

    return (
        <Container>
            <h3>{t('populartoday')}</h3>
            <SvgContainer>
                <İPhone />
                <Watch />
                <Camera />
                <Video />
                <Delivery />
                <FlashCard />
                <MemoryCard />
                <Mic />
                <Monitor />
            </SvgContainer>

            <ItemContainer>
                <List count={count} data={device_data} />
            </ItemContainer>
        </Container>
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
