const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    initImmediate: false,
    preload: ['en', 'tr'],
    defaultLanguage: 'en',
    otherLanguages: ['en', 'tr', 'es', 'de', 'fr', 'hi', 'ru', 'ko', 'ja', 'sv'],
    localeSubpaths: {
        tr: 'tr',
        en: 'en',
        es: 'es',
        de: 'de',
        fr: 'fr',
        hi: 'hi',
        ru: 'ru',
        ko: 'ko',
        ja: 'ja',
        sv: 'sv'
    }
})