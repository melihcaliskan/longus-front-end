import React, { useState } from 'react';

import { withTranslation } from '../../i18n'

const Detail = ({ query, t, isLight, toggleTheme, theme }) => {
    return (
        <div>
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
