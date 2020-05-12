import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
    background:red;
    margin-bottom:2em;
    
    @media only screen and (max-width: 960px) {

    }
`

export const EffectCard = ({ theme }) => {
    return (
        <Loader>
            Loading kısmı yapılacak.
        </Loader>
    )
}