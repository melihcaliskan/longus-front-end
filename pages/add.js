import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.button_bg};
    border-radius:7px;
    
    padding:1em;
    
    min-width:460px;

    h3{
        font-weight:700;
        font-size:35px;
        padding:0.2em;
    }
    @media only screen and (max-width: 960px) {
        h3{
        font-size:25px;
        }
    }
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.15);
`

const CustomTab = ({ t, theme, count }) => {
    const [loading, setLoading] = useState(true);
    return (
        "test"
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(CustomTab)
