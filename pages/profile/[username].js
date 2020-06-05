import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Loader from '../../helpers/Loader'
import Router from 'next/router'
import { withTranslation } from '../../i18n'

const Detail = ({ isAuth, query, t, isLight, toggleTheme, theme }) => {
    if (!isAuth) {
        useEffect(() => {
            Router.push("/")
        })
        return <Loader />
    }
    return (
        <div>
            <Head>
                <title>{query.username}</title>
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML,CSS,JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
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