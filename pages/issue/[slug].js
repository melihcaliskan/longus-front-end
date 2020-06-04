import React, { useState } from 'react';

import Head from 'next/head'
import Header from '../../components/Header'
import { withTranslation } from '../../i18n'

const Detail = ({ query, t, isLight, toggleTheme, theme }) => {
    return (
        <div>
            <Head>
                <title>{"test"}</title>
            </Head>
            <Header isLight={isLight} toggleTheme={toggleTheme} />
            {JSON.stringify(query)}
        </div>
    )
}

const getInitialProps = ({ res, query, err }) => {
    const namespacesRequired = ["detail"];
    return { namespacesRequired, query };
}

Detail.getInitialProps = getInitialProps;

export default withTranslation('detail')(Detail)
