import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import Header from '../components/Header'
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
const ColorContainer = styled.div`    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    .grid-2{
        grid-column: span 2;
    }

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Contact = ({ t, theme, }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Head>
                <title>Colors</title>
            </Head>
            <Header />
            <ContactHeader>
                <h3>Colors</h3>
            </ContactHeader>

            <Container style={{ marginTop: '5em' }}>
                <ColorContainer>
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />
                    <div style={{ background: theme.text, width: 250, height: 250 }} />

                </ColorContainer>
            </Container>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}
Contact.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

export default withTranslation('contact')(Contact)
