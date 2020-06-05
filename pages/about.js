import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components';

const ContactHeader = styled.div`
  background:url('/assets/contact-bg.png');
  background-repeat:no-repeat;
  background-size:cover;
  height:300px;
  margin-top:-9em;
  padding-top:10em;

  h3{
      font-size:40px;
      font-weight:800;
      text-align:center;
  }
`


const Contact = ({ t, theme, }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <ContactHeader>
                <h3>{t('aboutus')}</h3>
            </ContactHeader>
            <Container style={{marginTop:'5em'}}>
                aboutus...
            </Container>
        </>
    )
}
Contact.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

export default withTranslation('contact')(Contact)
