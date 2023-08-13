/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: []
    },
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL', 'ko', 'es', 'de'],
        defaultLocale: 'en-US',
    },
    env: {
        host: process.env.HOST,
        mail_user: process.env.MAIL_USER,
        mail_password: process.env.MAIL_PASSWORD,
        contact_url: process.env.CONTACT_URL,
    },
    async redirects() {
        return [
            {
                source: '/sitemap',
                destination: '/sitemap.xml',
                permanent: true,
            },
            {
                source: '/rss',
                destination: '/rss.xml',
                permanent: true,
            },
            {
                source: '/robots',
                destination: '/robots.txt',
                permanent: true,
            },
        ]
    },
}