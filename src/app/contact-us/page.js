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
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <meta name='keywords' content='love alarm app, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm version 2, love 2.0, love alarm contact us, love, ankit, ankit62879,사랑알람 2.0 , 사랑알람 , 사랑알람 2.0 앱, 사랑알람 앱, love alarm download, love alarm apk, love alarm android, love alarm ios, delanki support,  love alarm website , love alarm 2.0 website, love alarm 2.o website, 러브알람 2.0 홈페이지, 러브알람 홈페이지,, love alarm 2.o' />
                <link rel="shortcut icon" type="image/png" href={`${process.env.host}/favicon.png`} />
                <link rel="icon" type="image/png" href={`${process.env.host}/favicon.png`} />
                <link key={`icon-16`} rel="icon" type="image/png" sizes="16x16" href={`${process.env.host}/favicon-16x16.png`} />
                <link key={`icon-32`} rel="icon" type="image/png" sizes="32x32" href={`${process.env.host}/favicon-32x32.png`} />
                <link key={'apple-icon'} rel="apple-touch-icon" type="image/png" href={`${process.env.host}/apple-touch-icon.png`} />
            </Head>
            <section className='flex-grow'>
                <Contact />
            </section>
        </>
    )
}

export default page