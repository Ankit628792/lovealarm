import Contact from '@/components/Contact'
import Head from 'next/head'

export const metadata = {
    metadataBase: new URL(process.env.host),
    title: 'Love 2.0 | Contact Us - Love alarm 2.0',
    author: 'ankit628792',
    description: `Contact us on Love alarm 2.0 contact page if you have any questions and facing any issue. We're happy to hear from you! Contact us today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!`,
    openGraph: {
        title: 'Love Alarm 2.0 | Contact Us - Love alarm 2.0',
        description: `Contact us on Love alarm 2.0 contact page if you have any questions and facing any issue. We're happy to hear from you! Contact us today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!`,
        url: process.env.host + '/privacy-policy',
        siteName: 'Love Alarm 2.0',
        images: '/android-chrome-512x512.png',
    }
}

function page() {
    return (
        <>
            <Head>
                <meta name='keywords' content='love alarm app, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm version 2, love 2.0, love alarm contact us, love, ankit, ankit62879, kim so hyun, kim so-hyun, love alarm download, love alarm apk, love alarm android, love alarm ios, delanki support,  love alarm website , love alarm 2.0 website, love alarm 2.o website, love alarm 2.o' />
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
            </Head>
            <section className='flex-grow'>
                <Contact />
            </section>
        </>
    )
}

export default page