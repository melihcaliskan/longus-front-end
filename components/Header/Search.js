import React, { useEffect, useState } from 'react';
import { i18n, withTranslation } from '../../i18n'

import ActiveLink from '../ActiveLink'
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
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

const Results = () => {
    return (
        <div>
            <br />
            Arama sonuçları...
        </div>
    )
}


const SearchModal = ({ t, show, onHide }) => {
    const [value, setValue] = useState('');
    const handleHide = () => {
        onHide()
        setValue('')
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
                                onChange={(e) => setValue(e.target.value)}
                                size="lg"
                                type="text"
                                placeholder="📱 Search for a device"
                            />
                        </Form.Group>

                        {!value ?
                            <Suggestions />
                            :
                            <Results data={"data"} />
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
