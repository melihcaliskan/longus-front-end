const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    initImmediate: false,
    preload: ["en", "tr"],
    defaultLanguage: "en",
    otherLanguages: ['tr', 'de'],
    localePath: "public/static/locales",
    localeSubpaths: {
        tr: 'tr',
        en: 'en',
        de: 'de'
    }
})
