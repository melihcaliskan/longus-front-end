import { Link, i18n, withTranslation } from '../../i18n'
import React, { useEffect, useRef, useState } from 'react';

import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import styled from 'styled-components';

const CardContainer = styled.div`
    cursor:pointer;
    background:orange;

    height:200px;
`

const Card = ({ t, className }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div className={className}>
            <CardContainer ref={target} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                Macbook Pro 2018
            </CardContainer>
        </div>
    )
}

Card.getInitialProps = async () => ({
    namespacesRequired: ['all'],
})

export default withTranslation('all')(Card)
