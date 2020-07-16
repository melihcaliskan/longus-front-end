import ActiveLink from '../ActiveLink';
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    
    align-items:center;
    justify-content:space-between;
    position: relative;

    border-radius:8px;
    
    width:160px;
    height:160px;
    padding:1.5em 1em 1em 1em;

    background:${({ theme }) => theme.button_bg};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);

    p{
        color:${({ theme }) => theme.text};
        font-size:120%;
        text-align:center;
        line-height:1.3em;
        margin-top:1em;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    @media only screen and (max-width: 1024px) {
        padding:1.2em 0.8em 1em 0.8em;
        height:143px;
        p{
            font-size:18px;
        }
    }

    @media only screen and (max-width: 960px) {
        width:140px;
        height:140px;
    }
`

const Image = styled.img`
    width:54px;
    height:54px;
    filter:${props => props.isLight ? 'invert(0.2)' : 'invert(0.8)'};

    @media only screen and (max-width: 1024px) {
        width:48px;
        height:48px;
    }

    @media only screen and (max-width: 960px) {
    }
`

const Item = ({ data, lang, isLight }) => {
    return (
        <ActiveLink href={`/soon`}>
            <ItemContainer>
                <Image src={`data:image/svg+xml;utf8;base64, ${data.icon}`} isLight={isLight} />
                <p>{data.name[0][lang] ? data.name[0][lang] : data.name[0]["en"]}</p>
            </ItemContainer>
        </ActiveLink>
    )
}

export default Item