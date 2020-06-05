import { Camera, Case, Delivery, FlashCard, MemoryCard, Monitor, Watch, İPhone } from '../svg/find/index'
import React, { useState } from 'react';

import ActiveLink from '../ActiveLink'
import styled from 'styled-components';
import { withTranslation } from '../../i18n'

const Container = styled.div`
    background: ${({ theme }) => theme.body_100};
    border-radius:7px;
    
    margin:0 1em;
    padding:1em;
    
    min-width:460px;

    h3{
        font-weight:700;
        font-size:35px;
        padding:0.2em;
    }

    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
    
    @media only screen and (max-width: 960px) {
        background: ${({ theme }) => theme.body};
        border-radius:0;
        min-width:0;
        
        margin:0;
        padding:1em 2em;
        box-shadow:none;
        h3{
            font-size:25px;
        }
    }
`

const Top = styled.div`
    display:flex;
    align-items:center;
`

const ItemContainer = styled.div`
    background: ${({ theme }) => theme.body};
    padding:2em 2em 1em 2em;
    margin-top:1.5em;
    border-radius:7px;

    overflow-y:scroll;
    max-height:480px;
    @media only screen and (max-width: 960px) {
        overflow-y:auto;
        padding:0;
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
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.button_bg};
    border-radius:5px;
`

const Action = styled.div`
    background: ${({ theme }) => theme.VERY_LIGHT_GREEN};
    padding:0.4em 1em;
    text-align:center;
    text-transform:uppercase;
    font-weight:800;
    @media only screen and (max-width: 960px) {
        font-size:14px;
        padding:0.2em 0.5em;
    }
`

const Count = styled.h2`
    color: ${({ theme }) => theme.title};
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
    
    border-radius:8px;
    
    @media only screen and (max-width: 960px) {
        margin-bottom: ${props => props.last ? 0 : '1em'};
        background: ${props => props.white ? props.theme.body : props.theme.body};
        padding:1em;
    }
`

const SvgContainer = styled.div`
    display:flex;
    margin-top:1.4em;
    justify-content:space-between;
    padding:0 0.4em;

    @media only screen and (max-width: 960px) {
       padding:0.4em 1em;
       border-radius:30px;
       background:${({ theme }) => theme.body_100};
    }
`
const SvgItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    padding:0.6em;
    
    transition:all .3s;
    cursor:pointer;
    
    border-radius:50%;
    background: ${props => props.active ? props.theme.body_200 : props.theme.body};

    svg,path{
        fill: ${props => props.active ? props.theme.title : props.theme.text} !important;
    }
    @media only screen and (max-width: 960px) {
        padding:0;
        width:40px;
        height:40px;
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

const SvgButton = ({ children, active, onClick }) => {
    return (
        <SvgItem onClick={onClick} active={active}>
            {children}
        </SvgItem>
    )
}


const List = ({ t, data, count }) => {
    return (
        <div>
            {data.map((a) => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
                .slice(0, count).map((item, index) => (
                    <ActiveLink key={item.id} href={"/device/1"} query={{ brand: item.brand, name: item.name }}>
                        <Item white={index % 2 == 0} last={data.slice(0, count).length == index + 1}>
                            <Body>
                                <Top>
                                    <Brand>{item.brand}</Brand>
                                    <UserContainer>
                                        {Array(10).fill(1).map((el, i) =>
                                            <User key={i} />
                                        )}
                                    </UserContainer>
                                </Top>
                                <ProductName>{item.name}</ProductName>
                            </Body>
                            <Join>
                                <Action>
                                    {t('join')}
                                </Action>
                                <Count>
                                    {Math.floor(Math.random() * 100)}
                                </Count>
                            </Join>
                        </Item>
                    </ActiveLink>
                ))
            }
        </div >
    )
}

const CustomTab = ({ t, theme, count }) => {
    const [loading, setLoading] = useState(true);
    const [activeKey, setKey] = useState(1);

    return (
        <Container>
            <h3>{t('populartoday')}</h3>
            <SvgContainer>
                <SvgButton onClick={() => setKey(1)} active={activeKey == 1}>
                    <İPhone />
                </SvgButton>
                <SvgButton onClick={() => setKey(2)} active={activeKey == 2}>
                    <Watch />
                </SvgButton>
                <SvgButton onClick={() => setKey(3)} active={activeKey == 3}>
                    <Camera />
                </SvgButton>
                <SvgButton onClick={() => setKey(5)} active={activeKey == 5}>
                    <Delivery />
                </SvgButton>
                <SvgButton onClick={() => setKey(7)} active={activeKey == 7}>
                    <MemoryCard />
                </SvgButton>
                <SvgButton onClick={() => setKey(9)} active={activeKey == 9}>
                    <Monitor />
                </SvgButton>
            </SvgContainer>

            <ItemContainer>
                <List t={t} count={count} data={device_data} />
            </ItemContainer>
        </Container>
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
