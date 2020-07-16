import React, { useState } from 'react';
import { Router, withTranslation } from '../../i18n';

import { availableLangKey } from '../../helpers/functions';
import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.body_100};
    padding:1.5em;
    border-radius:6px;

    position: -webkit-sticky;
    position: sticky;
    top: 140px;

    margin-bottom:2em;
`
const Title = styled.h3`
    cursor:pointer;
    font-weight:600;
    margin:0;
`
const CategoryItem = styled.p`
    &:nth-child(2) {
        margin-top: 2em;
    }
    font-size:20px;
    padding:0.3em 0.7em;
    
    margin-bottom:0.2em;
    border-radius:7px;
    cursor:pointer;
    transition: background-color .3s;
    
    background: ${props => props.active ? props.theme.body_200 : 'initial'};
    &:hover{
        background: ${({ theme }) => theme.body_200};
    }

    span{
        
    }

    img{
        margin-right:1em;
    }
        
    @media only screen and (max-width: 960px) {
        &:nth-child(2) {
            margin-top: 1em;
        }
    }
`

const all_icon = "PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IjI0IC8gYmFzaWMgLyBtZW51LWRvdHMiPgo8cGF0aCBpZD0iaWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCA0QzE4IDUuMTA0NTcgMTguODk1NCA2IDIwIDZDMjEuMTA0NiA2IDIyIDUuMTA0NTcgMjIgNEMyMiAyLjg5NTQzIDIxLjEwNDYgMiAyMCAyQzE4Ljg5NTQgMiAxOCAyLjg5NTQzIDE4IDRaTTIwIDE0QzE4Ljg5NTQgMTQgMTggMTMuMTA0NiAxOCAxMkMxOCAxMC44OTU0IDE4Ljg5NTQgMTAgMjAgMTBDMjEuMTA0NiAxMCAyMiAxMC44OTU0IDIyIDEyQzIyIDEzLjEwNDYgMjEuMTA0NiAxNCAyMCAxNFpNMjAgMjJDMTguODk1NCAyMiAxOCAyMS4xMDQ2IDE4IDIwQzE4IDE4Ljg5NTQgMTguODk1NCAxOCAyMCAxOEMyMS4xMDQ2IDE4IDIyIDE4Ljg5NTQgMjIgMjBDMjIgMjEuMTA0NiAyMS4xMDQ2IDIyIDIwIDIyWk0xMiAyMkMxMC44OTU0IDIyIDEwIDIxLjEwNDYgMTAgMjBDMTAgMTguODk1NCAxMC44OTU0IDE4IDEyIDE4QzEzLjEwNDYgMTggMTQgMTguODk1NCAxNCAyMEMxNCAyMS4xMDQ2IDEzLjEwNDYgMjIgMTIgMjJaTTEwIDEyQzEwIDEzLjEwNDYgMTAuODk1NCAxNCAxMiAxNEMxMy4xMDQ2IDE0IDE0IDEzLjEwNDYgMTQgMTJDMTQgMTAuODk1NCAxMy4xMDQ2IDEwIDEyIDEwQzEwLjg5NTQgMTAgMTAgMTAuODk1NCAxMCAxMlpNMTIgNkMxMC44OTU0IDYgMTAgNS4xMDQ1NyAxMCA0QzEwIDIuODk1NDMgMTAuODk1NCAyIDEyIDJDMTMuMTA0NiAyIDE0IDIuODk1NDMgMTQgNEMxNCA1LjEwNDU3IDEzLjEwNDYgNiAxMiA2Wk0yIDIwQzIgMjEuMTA0NiAyLjg5NTQzIDIyIDQgMjJDNS4xMDQ1NyAyMiA2IDIxLjEwNDYgNiAyMEM2IDE4Ljg5NTQgNS4xMDQ1NyAxOCA0IDE4QzIuODk1NDMgMTggMiAxOC44OTU0IDIgMjBaTTQgMTRDMi44OTU0MyAxNCAyIDEzLjEwNDYgMiAxMkMyIDEwLjg5NTQgMi44OTU0MyAxMCA0IDEwQzUuMTA0NTcgMTAgNiAxMC44OTU0IDYgMTJDNiAxMy4xMDQ2IDUuMTA0NTcgMTQgNCAxNFpNMiA0QzIgNS4xMDQ1NyAyLjg5NTQzIDYgNCA2QzUuMTA0NTcgNiA2IDUuMTA0NTcgNiA0QzYgMi44OTU0MyA1LjEwNDU3IDIgNCAyQzIuODk1NDMgMiAyIDIuODk1NDMgMiA0WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8L3N2Zz4K"

const CategoryList = ({ t, lang, query, categories, isMobile }) => {
    const [collapsed, setCollapsed] = useState(!isMobile);
    const [limit, setLimit] = useState(!isMobile ? 10 : 3);
    const [cursor, setCursor] = useState(limit);

    const { category } = query

    const loadMore = () => {
        setCursor(cursor + limit)
    }
    const handleChange = (slug = "/all") => {
        if (isMobile) {
            setCollapsed(false)
        }
        Router.push(slug)
    }
    return (
        <Container>
            <Title onClick={() => setCollapsed(!collapsed)}>{t('categories')} {collapsed ? ">" : "<"}</Title>
            {collapsed &&
                <CategoryItem onClick={() => handleChange()} active={!category}>
                    <img height={20} width={20} src={`data:image/svg+xml;utf8;base64,${all_icon}`} />
                    <span>{t('all')}</span>
                </CategoryItem>
            }
            {collapsed && categories.slice(0, cursor).map((item, index) => {
                const names = item.name[0]
                return (
                    <CategoryItem onClick={() => handleChange(`/all?category=${item.slug}`)} active={category === item.slug}>
                        <img height={20} width={20} src={`data:image/svg+xml;utf8;base64, ${item.icon}`} />
                        <span>{names[lang] || names["en"] || names[availableLangKey(names)]}</span>
                    </CategoryItem>
                )
            })}
            {collapsed && cursor < categories.length &&
                <p onClick={() => loadMore()}>devamını gör</p>
            }
        </Container >
    )
}

CategoryList.getInitialProps = async () => ({
    namespacesRequired: ['all'],
})

export default withTranslation('all')(CategoryList)
