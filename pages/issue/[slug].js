import React, { useState } from 'react';

import Head from 'next/head'
import { withTranslation } from '../../i18n'

const Detail = ({ query, t, isLight, toggleTheme, theme }) => {
    return (
        <div>
            <Head>
                <title>{query.slug}</title>
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