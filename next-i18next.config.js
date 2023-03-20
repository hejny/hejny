const { join } = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cs'],
    },
    localePath: join(__dirname, 'locales'),
    localeExtension: 'yml',

    domains: [
        {
            domain: 'example.com',
            defaultLocale: 'pavolhejny.com',
        },
        {
            domain: 'example.nl',
            defaultLocale: 'pavolhejny.cz',
        },
    ],
};

/**
 * TODO: Fallback locales @see https://github.com/i18next/next-i18next#fallback-locales
 * TODO: https://github.com/i18next/next-i18next#4-declaring-namespace-dependencies
 */
