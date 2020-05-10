import React, { useEffect, useState } from 'react';

import ActiveLink from '../ActiveLink'
import { light_colors } from '../../helpers/colors'
import styled from 'styled-components';

//            <img width={40} src="https://www.notebookcheck.net/fileadmin/_processed_/4/0/csm_MacBook_Pro_concept_white_2d8e43124c.jpg" />

const CustomCard = styled.div`
    display:inline-flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1em;
    padding:1em 1em 0 1em;
    min-width:140px;
    background:${light_colors.BUTTON_BG};
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
    margin-right:1em;
    ${"svg"}{
        transform: scale(0.7);
        margin-bottom:1em;
    }
`
const Content = styled.h3`
    color:${light_colors.TEXT_COLOR};
    font-size:18px;
    font-weight:500;
    line-height:1.4em;
`

const Image = styled.img`
    width:50%;
    max-height:60%;
    object-fit:contain;
    border-radius:5px;
    margin-bottom:1em;
`
const customStyle = {
    height:'100%',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'flex-start'
}
const Card = ({ children, style, svg, img, href }) => {
    return (
        <CustomCard style={style}>
            <ActiveLink style={customStyle} href={`/${href}`}>
                {svg}
                {img ? <Image src={img} /> : null}
                <Content>{children}</Content>
            </ActiveLink>
        </CustomCard>
    )
}

export default Card