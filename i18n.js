const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    defaultLanguage: "tr",
    otherLanguages: ['en'],
    localePath:"public/static/locales",
    localeSubpaths: {
        tr: 'tr',
        en: 'en'
    }
})
