/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: []
    },
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'en-US',
    },
    env: {
        host: process.env.HOST,
    }
}