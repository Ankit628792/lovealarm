import { faqs } from "@/utils";
import Accordion from "../../components/Accordion";
import Head from "next/head";

export const metadata = {
    metadataBase: new URL(process.env.host),
    title: 'Love 2.0 | Frequently asked questions for Love Alarm 2.0',
    author: 'ankit628792',
    description: 'Have some questions in mind regarding love alarm, check love alarm 2.0 faq page. Most of the time your problem answer is present if you still have any, contact us',
    openGraph:{
        title: 'Love Alarm 2.0 | Frequently asked questions for Love Alarm 2.0',
        description: 'Have some questions in mind regarding love alarm, check love alarm 2.0 faq page. Most of the time your problem answer is present if you still have any, contact us',
        url: process.env.host + '/frequently-asked-questions',
        siteName: 'Love Alarm 2.0',
        images: '/android-chrome-512x512.png',
    }
}

function faq() {
    return (
        <>
            <Head>
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <meta name='keywords' content='love alarm app, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm version 2, love 2.0, love, ankit, ankit62879, 사랑알람 2.0 , 사랑알람 , 사랑알람 2.0 앱, 사랑알람 앱, love alarm download, love alarm apk, love alarm android, love alarm ios, love alarm faq,  love alarm website , love alarm 2.0 website, love alarm 2.o website, 러브알람 2.0 홈페이지, 러브알람 홈페이지,, love alarm 2.o' />
            </Head>
            <div className="pb-20 pt-10">
                <h1 className="text-4xl md:text-5xl font-semibold text-rose-500 text-center mt-10">Frequently Asked Questions</h1>
                <div className="h-1 w-48 mx-auto my-3 md:my-5 bg-sky-500 rounded-lg"></div>
                <div className="p-5">
                    {Object.keys(faqs).map((key, i) => (
                        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10">
                            <h1 className="text-3xl font-medium text-rose-500 pb-3 mb-3 border-b-2 border-b-rose-400">{key}</h1>
                            {faqs[key].map(((item, index) => (
                                <Accordion key={i + index} title={item.title} content={item.description} />
                            )))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default faq