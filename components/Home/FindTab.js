import { Calculator, Camera, Case, Delivery, FlashCard, MemoryCard, Monitor, Watch, İPhone } from '../svg/find/index'
import React, { useEffect, useState } from 'react';

import { API_URL } from '../../helpers/urls'
import ActiveLink from '../ActiveLink'
import { GET } from '../../helpers/network'
import { POPULAR_CATEGORIES } from '../../helpers/config'
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

    max-height:100px;
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

const SvgButton = ({ children, active, onClick }) => {
    return (
        <SvgItem onClick={onClick} active={active}>
            {children}
        </SvgItem>
    )
}


const List = ({ t, data, count }) => {
    console.log(data)
    if (!data) {
        return ("loading")
    }
    //data.slice(0, count)
    return (
        <div>
            {data.map((item, index) => (
                <ActiveLink key={item.id} href={`/devices/${item.slug}`} query={{ brand: item.brand, name: item.name }}>
                    <Item white={index % 2 == 0} last={data.slice(0, count).length == index + 1}>
                        <Body>
                            <Top>
                                <Brand>{item.brand[0].name}</Brand>
                                {/*}
                                    <UserContainer>
                                        {Array(10).fill(1).map((el, i) =>
                                            <User key={i} />
                                        )}
                                    </UserContainer>
                                    {*/}
                            </Top>
                            <ProductName>{item.name}</ProductName>
                        </Body>
                        <Join>
                            <Action>
                                {t('join')}
                            </Action>
                            <Count>
                                {item.same_here_count}
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
    const [loading, setLoading] = useState(false);
    const [activeKey, setKey] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            setLoading(true)
            const result = await GET(`categories?slug=${POPULAR_CATEGORIES[activeKey]}`)
            if (!ignore) {
                setData(result[0])
            }
            setLoading(false)
        }
        fetchData();
        console.log(data)
        return () => { ignore = true; }
    }, [activeKey]);
    return (
        <Container>
            <h3>{t('populartoday')}</h3>
            <SvgContainer>
                {POPULAR_CATEGORIES.map((item, i) => {
                    let icon;
                    switch (item) {
                        case "smartphone": icon = <İPhone />; break;
                        case "computer": icon = <Calculator />; break;
                        case "smartwatch": icon = <Watch />; break;
                        case "tv": icon = <Monitor />; break;
                        case "headphones": icon = <Delivery />; break;
                        case "monitor": icon = <Monitor />; break;
                    }
                    return (
                        <SvgButton onClick={() => setKey(i)} active={activeKey == i}>
                            {icon}
                        </SvgButton>
                    )
                })}
            </SvgContainer>

            {loading || !data ?
                <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img height={30} src="/assets/inline-loader.svg" />
                </div>
                :
                <ItemContainer>
                    {data.devices && data.devices.length == 0 ?
                        <h4 style={{ textAlign: 'center' }}>Cihaz bulunamadı</h4>
                        :
                        <List t={t} count={count} data={data.devices} />
                    }
                </ItemContainer>
            }
        </Container>
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
