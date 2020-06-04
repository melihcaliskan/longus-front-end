import { API_URL } from '../helpers/urls';
import GridTemplate from '../components/GridTemplate'
import React from 'react';
import { withTranslation } from '../i18n'

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
