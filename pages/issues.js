import { API_URL } from '../helpers/urls';
import GridTemplate from '../components/GridTemplate'
import React from 'react';
import { withTranslation } from '../i18n'

const Issues = ({ t, language, isLight, toggleTheme, data }) => {
    return (
        <GridTemplate
            type="issue"
            url="issues"
            searchUrl="issue"
            emoji="📖"
            isLight={isLight}
            toggleTheme={toggleTheme}
            data={data}
        />
    )
}

Issues.getInitialProps = async ctx => {
    const namespacesRequired = ["common"];
    const res = await fetch(`${API_URL}issues/start=0&limit=12`)
    const issues = await res.json()
    return { namespacesRequired, data: issues }
}

export default withTranslation('common')(Issues)
