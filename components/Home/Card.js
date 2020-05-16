import React, { useEffect, useState } from 'react';

import ActiveLink from '../ActiveLink'
import { light_colors } from '../../helpers/colors'
import styled from 'styled-components';

const CustomCard = styled.div`
    display:inline-flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1em;
    padding:1em 1em 0 1em;
    min-width:140px;
    background:${({ theme }) => theme.button_bg};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
    margin-right:1em;
    border-radius:6px;
    ${"svg"}{
        transform: scale(0.7);
        margin-bottom:1em;
        ${"path"}{
            fill:${({ theme }) => theme.text};
        }
    }
    @media only screen and (max-width: 940px) {
        transform:scale(0.85);
        margin:0em;
    }
`
const Content = styled.h3`
    color:${({ theme }) => theme.text};
    font-size:18px;
    font-weight:500;
    line-height:1.4em;
    width:100%;
`

const Image = styled.img`
    width:50%;
    max-height:60%;
    object-fit:contain;
    border-radius:5px;
    margin-bottom:1em;
`
const customStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
}
const Card = ({ children, style, svg, img, href }) => {
    return (
        <CustomCard style={style}>
            <ActiveLink style={customStyle} href={href ? `/${href}` : null}>
                {svg}
                {img ? <Image src={img} /> : null}
                <Content>{children}</Content>
            </ActiveLink>
        </CustomCard>
    )
}

export default Card