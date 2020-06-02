import { Link, i18n, withTranslation } from '../i18n'
import React, { useEffect, useState } from 'react';

import Button from '../components/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
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
    margin:1em 0;
`

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    .grid-2{
        grid-column: span 2;
    }

    .radio-container{
        .radio-item{
            background:cyan;
            margin:0.8em 0;
            padding:0.7em 2em;
            border-radius:4px;
            background:${({ theme }) => theme.darken_body};
            label{
                margin-left:0.4em;
            }
        }
    } 

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        gap: 50px;

        .grid-2{
            grid-column: initial;
        }
    }
`
const Label = styled.h3`
    color:${({ theme }) => theme.detail_text};
    font-size:18px;
    text-transform:uppercase;
    font-weight:700;
`
const InputItem = styled.div``

const RangeLabel = styled.div`
    display:flex;
    margin-top:-1em;
    
    font-weight:400;
    font-size:14px;
    justify-content:space-between;
    span{
        color:${({ theme }) => theme.scrollbar_hover};
    }
    span:first-child{
        padding:0 0.4em;
    }
`


const customStyles = (theme) => ({

    indicatorSeparator: (provided, state) => ({
        ...provided,
        background: theme.darken_body,
        borderColor: theme.darken_body,
        width: 0
    }),
    control: (provided, state) => ({
        ...provided,
        borderColor: theme.darken_body,
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        background: theme.darken_body,
        color: theme.text,
    }),

    dropdownIndicator: (provided, state) => ({
        ...provided,
        background: theme.darken_body,
        color: theme.text,
    }),

    input: (provided, state) => ({
        ...provided,
        color: theme.text,
        border: 0
    }),
    option: (provided, state) => ({
        ...provided,
        color: theme.text,
    }),

    menu: (provided, state) => ({
        ...provided,
        background: theme.darken_body,

    }),

    singleValue: (provided, state) => ({
        ...provided,
        color: theme.text
    }),
})

const CustomTab = ({ t, theme, isLight, toggleTheme, count }) => {
    const [loading, setLoading] = useState(true);

    const [device, setDevice] = useState(null);
    const [isResolved, setResolved] = useState("no");
    const [isStatement, setStatement] = useState("no");

    console.log(isResolved)
    return (
        <>
            <Head>
                <title>Add New Issue</title>
            </Head>
            <Header reverse />
            <Container style={{ marginBottom: '10em' }}>
                <Form>
                    <Fade bottom distance={'1.2em'} duration={600}>
                        <Title>{t('addnew')}</Title>
                    </Fade>
                    <Fade duration={1000}>
                        <FormContainer>
                            <InputItem>
                                <Label>{t('device')}</Label>
                                <Select
                                    styles={customStyles(theme)}
                                    value={device}
                                    onChange={(e) => setDevice(e)}
                                    options={options}
                                />
                            </InputItem>
                            <InputItem>
                                <Label>{t('issue')}</Label>
                                <Select
                                    styles={customStyles(theme)}
                                    value={device}
                                    onChange={(e) => setDevice(e)}
                                    options={options}
                                />
                            </InputItem>

                            <InputItem className="grid-2">
                                <Label>{t('explanation')}</Label>
                                <Form.Control as="textarea" rows="3" />
                            </InputItem>

                            <InputItem>
                                <Label>{t('repeat_frequency')}{" (0 - 10)"}</Label>
                                <Form.Group controlId="formBasicRangeCustom">
                                    <Form.Control max={10} onChange={(e) => console.log(e.target.value)} type="range" custom />
                                </Form.Group>
                                <RangeLabel>
                                    {[...Array(11)].map((x, i) =>
                                        <span key={i}>{i}</span>
                                    )}
                                </RangeLabel>
                            </InputItem>
                            <InputItem>
                                <Label>{t('effect')}{" (0 - 10)"}</Label>
                                <Form.Group controlId="formBasicRangeCustom">
                                    <Form.Control max={10} onChange={(e) => console.log(e.target.value)} type="range" custom />
                                </Form.Group>
                                <RangeLabel>
                                    {[...Array(11)].map((x, i) =>
                                        <span key={i}>{i}</span>
                                    )}
                                </RangeLabel>
                            </InputItem>
                            <InputItem className="radio-container" onChange={(e) => setResolved(e.target.value)}>
                                <Label>{t('isResolved')}</Label>
                                <Form.Check
                                    className="radio-item"
                                    type={'radio'}
                                    checked={isResolved == "no"}
                                    label={t('issueContinue')}
                                    value={"no"}
                                    id="is-resolved-no"
                                />
                                <Form.Check
                                    className="radio-item"
                                    type={'radio'}
                                    checked={isResolved == "yes"}
                                    label={t('issueResolved')}
                                    value={"yes"}
                                    id="is-resolved-yes"
                                />
                            </InputItem>
                            <InputItem className="radio-container" onChange={(e) => setStatement(e.target.value)}>
                                <Label>{t('companyStatement')}</Label>
                                <Form.Check
                                    className="radio-item"
                                    type={'radio'}
                                    checked={isStatement == "no"}
                                    label={t('statementNo')}
                                    value={"no"}
                                    id="statement-no"
                                />
                                <Form.Check
                                    className="radio-item"
                                    type={'radio'}
                                    checked={isStatement == "yes"}
                                    label={t('statementYes')}
                                    value={"yes"}
                                    id="statement-yes"
                                />
                            </InputItem>
                            {isResolved == "yes" ?
                                <Fade duration={700}>
                                    <div className="grid-2">
                                        <Label>{t('howResolved')}</Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </div>
                                </Fade>
                                : null
                            }
                            {isStatement == "yes" ?
                                <Fade duration={700}>
                                    <div className="grid-2">
                                        <Label>{t('howResolved')}</Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </div>
                                </Fade>
                                : null
                            }
                        </FormContainer>
                    </Fade>
                    <br /><br />
                    <Button type="primary" href="/add">
                        {t('add')}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

CustomTab.getInitialProps = async () => ({
    namespacesRequired: ['issue_card'],
})

export default withTranslation('issue_card')(CustomTab)
