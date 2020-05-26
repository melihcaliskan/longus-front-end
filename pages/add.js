import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../components/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Home/Footer'
import Form from 'react-bootstrap/Form'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row'
import Select from 'react-select';
import styled from 'styled-components';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const Title = styled.h1`
    font-weight:800;
    padding-left:2em;
`

const AddContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px 60px;

    padding:5em;
    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`
const Label = styled.h3`
    color:${({ theme }) => theme.detail_text};
    font-size:18px;
    text-transform:uppercase;
    font-weight:700;
`
const InputItem = styled.div``

const CustomTab = ({ t, theme, toggleTheme, count }) => {
    const [loading, setLoading] = useState(true);

    const [device, setDevice] = useState(null);
    const [isResolved, setResolved] = useState("no");
    const [isStatement, setStatement] = useState("no");

    console.log(isResolved)
    return (
        <AddContainer>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Form style={{ marginTop: '10em' }}>
                <Fade bottom distance={'1.2em'} duration={700}>
                    <Title>{t('addnew')}</Title>
                </Fade>
                <Fade duration={1000}>
                    <FormContainer>
                        <InputItem>
                            <Label>{t('device')}</Label>
                            <Select
                                value={device}
                                onChange={(e) => setDevice(e)}
                                options={options}
                            />
                        </InputItem>
                        <InputItem>
                            <Label>{t('issue')}</Label>
                            <Select
                                value={device}
                                onChange={(e) => setDevice(e)}
                                options={options}
                            />
                        </InputItem>
                        <InputItem>
                            <Label>{t('repeat_frequency')}</Label>
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Control max={10} onChange={(e) => console.log(e.target.value)} type="range" custom />
                            </Form.Group>
                        </InputItem>
                        <InputItem>
                            <Label>{t('effect')}</Label>
                            <Form.Group controlId="formBasicRangeCustom">
                                <Form.Control max={10} onChange={(e) => console.log(e.target.value)} type="range" custom />
                            </Form.Group>
                        </InputItem>
                        <InputItem onChange={(e) => setResolved(e.target.value)}>
                            <Label>{t('isResolved')}</Label>
                            <Form.Check
                                type={'radio'}
                                checked={isResolved == "no"}
                                label={t('issueContinue')}
                                value={"no"}
                            />
                            <Form.Check
                                type={'radio'}
                                checked={isResolved == "yes"}
                                label={t('issueResolved')}
                                value={"yes"}
                            />
                            {isResolved == "yes" ?
                                <Fade duration={700}>
                                    <div style={{ marginTop: '30px' }}>
                                        <Label>{t('howResolved')}</Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </div>
                                </Fade>
                                : null
                            }
                        </InputItem>
                        <InputItem onChange={(e) => setStatement(e.target.value)}>
                            <Label>{t('companyStatement')}</Label>
                            <Form.Check
                                type={'radio'}
                                checked={isStatement == "no"}
                                label={t('statementNo')}
                                value={"no"}
                            />
                            <Form.Check
                                type={'radio'}
                                checked={isStatement == "yes"}
                                label={t('statementYes')}
                                value={"yes"}
                            />
                            {isStatement == "yes" ?
                                <Fade duration={700}>
                                    <div style={{ marginTop: '30px' }}>
                                        <Label>{t('howResolved')}</Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </div>
                                </Fade>
                                : null
                            }
                        </InputItem>
                        <InputItem>
                            <Label>{t('howResolved')}</Label>
                            <Form.Control as="textarea" rows="3" />
                        </InputItem>
                        <InputItem>
                            <Label>{t('whatIsStatement')}</Label>
                            <Form.Control as="textarea" rows="3" />
                        </InputItem>
                    </FormContainer>
                </Fade>
                <Button style={{ marginLeft: '5em' }} type="primary" href="/add">
                    {t('add')}
                </Button>
            </Form>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <Footer />
        </AddContainer >
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['issue_card'],
})

export default withTranslation('issue_card')(CustomTab)
