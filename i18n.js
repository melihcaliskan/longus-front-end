const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    initImmediate: false,
    preload: ["en", "tr"],
    defaultLanguage: "en",
    otherLanguages: ['tr', 'de', 'fr', 'es', 'ja', 'ru', 'sv'],
    localePath: "public/static/locales",
    localeSubpaths: {
        tr: 'tr',
        en: 'en',
        de: 'de',
        fr: 'fr',
        es: 'es',
        ja: 'ja',
        ru: 'ru',
        sv: 'sv',
    }
})

/*
- İspanyolca: es (Español)
- İngilizce: en (English)
- Hintçe: hi (हिन्दी)
- Portekizce: pt (Português)
- Rusça: ru (русский)
- Fransızca: fr (Français)
- Almanca: de (Deutsche)
- Çince: zh ama onlarda simplified ve traditional var; zh-Hans simp, zh-Hant tradi olan (中文)
- Korece: ko (한국어)
- Japonca: ja (日本語)
*/