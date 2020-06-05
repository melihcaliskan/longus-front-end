import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
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


const Contact = ({ t, isLight, toggleTheme }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Head>
                <title>{t('contactus')}</title>
            </Head>
            <ContactHeader>
                <h3>{t('contactus')}</h3>
            </ContactHeader>
            <Container style={{ marginTop: '5em' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
Contact.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

export default withTranslation('contact')(Contact)
