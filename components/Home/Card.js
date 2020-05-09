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

const Card = ({ children, style, svg }) => {
    return (
        <CustomCard style={style}>
            {svg}
            <Content>{children}</Content>
        </CustomCard>
    )
}

export default Card