import React, { useState } from 'react';

import { API_URL } from '../helpers/urls'
import { withTranslation } from '../i18n'

const Detail = ({ t, isLight, query, data }) => {
    return (
        <div>
            header koy ve gridde göster
            <br /> <br /> <br />
            {JSON.stringify(data)}
        </div>
    )
}

export const getStaticProps = async ctx => {
    const res = await fetch(`${API_URL}issues`)
    const issues = await res.json()

    return {
        props: { data: issues },
    }
}

export default withTranslation('detail')(Detail)
