/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: []
    },
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL', 'ko'],
        defaultLocale: 'en-US',
    },
    env: {
        host: process.env.HOST,
        mail_user: process.env.MAIL_USER,
        mail_password: process.env.MAIL_PASSWORD,
        contact_url: process.env.CONTACT_URL,
    }
}