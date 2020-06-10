import React, { useEffect, useState } from 'react';
import { Router, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import { GET } from '../../helpers/network'
import Modal from 'react-bootstrap/Modal'
import { handlePhoto } from '../../helpers/functions'
import styled from 'styled-components';

const Container = styled.div`
    h3{
        font-size:24px;
        margin:1.5em 0em 1em 0;
    }
    .issue-container{
        display:flex;
        
        .issue-placeholder{
            background:${({ theme }) => theme.darken_body};
            width:55px;
            height:55px;
            border-radius:5px;
            margin-right:1em;
        }
    }
`

const Title = styled.h2`
    margin:0;
    font-size:30px;
    font-weight:bold;
    padding:1em 0.5em 0em 0.5em;

    text-align:${props => props.center ? "center" : "initial"};
`

const SearchItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    transition: .6s background-color;
    background:${({ theme }) => theme.body_100};

    cursor:pointer;
    margin-top:1em;
    padding:0.5em 2em;
    border-radius:6px;

    &:hover{
        background:${({ theme }) => theme.body_200};
    }

    img{
        padding-right:1em;
        mix-blend-mode: multiply;
    }
`

const DeviceName = styled.h2`
    margin:0;
    font-size:24px;
    font-weight:bold;
`


const Suggestions = () => {
    return (
        <>
            <h3>Sık Karşılaşılan Sorunlar</h3>
            <div className="issue-container">
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
            </div>

            <h3>Popüler Cihazlar</h3>
            <div className="issue-container">
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
                <div className="issue-placeholder" />
            </div>
        </>
    )
}


const Results = ({ t, loading, results }) => {
    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3em 0 1em 0' }}>
                <img height={150} src="/assets/loading.svg" />
            </div>
        )
    }
    if (results?.length) {
        return (
            <>
                <Title>Results:</Title>
                {results.map(item => (
                    <SearchItem onClick={() => Router.push('/devices/' + item.slug)}>
                        <DeviceName>{item.name}</DeviceName>
                        <img height={50} src={handlePhoto(item.photo)} />
                    </SearchItem>
                ))}
            </>
        )
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3em 0 1em 0' }}>
                <img height={150} src="/assets/no-data.svg" />
                <Title center>{t('noresult')}</Title>
            </div>
        )
    }
}


const SearchModal = ({ t, show, onHide }) => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [searchData, setSearchData] = useState(null);

    const handleHide = () => {
        onHide()
        setValue('')
        setSearchData(null)
    }

    const handleSearch = async (value) => {
        setValue(value)
        const delay = setTimeout(async () => {
            setLoading(true)
            if (value.length > 2) {
                const data = await GET(`devices?name_contains=${value}`)
                setSearchData(data)
            }
            setLoading(false)
        }, 400)
        return () => clearTimeout(delay)
    }
    return (
        <Modal
            show={show}
            onHide={handleHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="header-search-modal"
            style={{ marginTop: '25vh' }}>
            <Modal.Body>
                <Fade delay={70} duration={700}>
                    <Container>
                        <Form.Group>
                            <Form.Control
                                value={value}
                                onChange={(e) => handleSearch(e.target.value)}
                                size="lg"
                                type="text"
                                placeholder="📱 Search for a device"
                            />
                        </Form.Group>

                        {!value ?
                            <Suggestions />
                            :
                            <Results t={t} loading={loading} results={searchData} />
                        }
                    </Container>
                </Fade>
            </Modal.Body>
        </Modal>
    )
}

SearchModal.getInitialProps = async () => ({
    namespacesRequired: ['commonheader'],
})

export default withTranslation('commonheader')(SearchModal)
