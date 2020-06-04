import { API_URL } from '../helpers/urls';
import GridTemplate from '../components/GridTemplate'
import React from 'react';
import { withTranslation } from '../i18n';

const Categories = ({ t, language, isLight, toggleTheme, data }) => {
    return (
        <GridTemplate
            type="category"
            url="categories"
            searchUrl="category"
            emoji="🔠"
            isLight={isLight}
            toggleTheme={toggleTheme}
            data={data}
            language={language}
        />
    )
}

Categories.getInitialProps = async ctx => {
    const namespacesRequired = ["common"];
    const res = await fetch(`${API_URL}categories/start=0&limit=12`)
    const categories = await res.json()
    return { namespacesRequired, data: categories }
}

export default withTranslation('common')(Categories)
