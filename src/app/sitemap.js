export default async function sitemap() {
    const baseUrl = process.env.host;

    let pages = ['/', '/how-it-works', '/our-story', '/contact-us', '/frequently-asked-questions', '/terms-and-conditions', '/privacy-policy', '/refund-policy']

    let maps = pages.map(page => ({
        url: baseUrl + page, lastModified: new Date(),
    }))

    return maps
}