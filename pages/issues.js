import React, { useEffect, useState } from 'react';

import { API_URL } from '../helpers/urls';
import ActiveLink from '../components/ActiveLink';
import Button from '../components/Button'
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import GridTemplate from '../components/GridTemplate'
import Head from 'next/head';
import Header from '../components/Header';
import Twemoji from '../components/Twemoji';
import styled from 'styled-components';
import { withTranslation } from '../i18n';

const Issues = ({ t, language, isLight, toggleTheme, data }) => {
    return (
        <>
            <GridTemplate
                type="issue"
                title={t('list')}
                emoji="📖"
                isLight={isLight}
                toggleTheme={toggleTheme}
                data={data}
            />
        </>
    )
}

Issues.getInitialProps = async ctx => {
    const res = await fetch(`${API_URL}issues/start=0&limit=10`)
    const issues = await res.json()
    return { data: issues }
}

export default withTranslation('issues')(Issues)
