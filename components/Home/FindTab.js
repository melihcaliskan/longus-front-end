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
    
    padding:1em;
    
    h3{
        font-weight:700;
        font-size:35px;
        padding:0.2em;
    }
    @media only screen and (max-width: 1440px) {
    }
    @media only screen and (max-width: 640px) {
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

    height:480px;
    overflow-y:scroll;
    
`

const Brand = styled.h4`
    color:${({ theme }) => theme.light_brand};
    text-transform:uppercase;
    font-weight:800;
    font-size:16px;
`
const ProductName = styled.h2`
    color:${({ theme }) => theme.title};
    font-weight:800;
    font-size:36px;
    margin-top:0.2em;
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
    background: ${({ theme }) => theme.scrollbar_hover};
    border:2px solid white;
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
    color: ${({ theme }) => theme.detail_text};
`

const Count = styled.h2`
    text-align:center;
    font-weight:800;
    margin:0.3em;
`

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    
    margin-bottom:2em;
`

const SvgContainer = styled.div`
    display:flex;
    margin-top:1.4em;
    justify-content:space-between;
    padding:0 0.4em;
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

const List = ({ data }) => {
    return (
        <div>
            {data.map(item => (
                <a key={item.id} href={item.url}>
                    <Item>
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
                                74
                            </Count>
                        </Join>
                    </Item>
                </a>
            ))}
        </div>
    )
}

const CustomTab = ({ t, theme }) => {
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
                <Calculator />
                <Case />
                <Delivery />
                <FlashCard />
                <MemoryCard />
                <Mic />
                <Monitor />
            </SvgContainer>
            
            <ItemContainer>
                <List data={device_data} />
            </ItemContainer>
        </Container>
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
