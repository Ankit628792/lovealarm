import { privacyPolicy } from '@/utils'
import Head from 'next/head'
import React from 'react'

export const metadata = {
    metadataBase: new URL(process.env.host),
    title: 'Love 2.0 | Privacy Policy for Love alarm 2.0',
    description: 'Love alarm 2.0 privacy policy contains all the privacy It outlines the types of data collected and how it is used. It also explains user rights and how to exercise them. Finally, it outlines how user data is kept secure.',
    author: 'ankit628792',
    openGraph: {
        title: 'Love Alarm 2.0 | Privacy Policy',
        description: 'Love alarm 2.0 privacy policy contains all the privacy It outlines the types of data collected and how it is used. It also explains user rights and how to exercise them. Finally, it outlines how user data is kept secure.',
        url: process.env.host + '/privacy-policy',
        siteName: 'Love Alarm 2.0',
        images: '/android-chrome-512x512.png',
    },
}

function privacy_policy() {
    return (
        <>
            <Head>
                <meta name='keywords' content='love alarm privacy, love alarm, love alarm 2.0 , love alarm app 2.0, love alarm privacy policy, love 2.0, love, ankit62879, kim so hyun, kim-so-hyun, love alarm download, love alarm apk, love alarm limitation, ankit, ankit62879, kim so hyun, kim so-hyun,love alarm ios, love alarm version 2 ios, delanki, product company, product development company' />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <section className='flex flex-col gap-10 justify-between min-h-screen w-full'>
                <div className='policy max-w-4xl rounded-lg p-5 md:p-10 xl:px-20 !m-5 lg:!mx-auto border border-slate-200 bg-slate-50 filter backdrop-blur-lg'>
                    <h4 className="text-3xl lg:text-4xl font-semibold text-rose-500 text-center pb-2">Privacy Policy</h4>
                    <div className="h-1 w-48 mx-auto mb-3 md:mb-5 bg-sky-500 rounded-lg"></div>

                    <h1 className={`text-gray-600 text-base text-justify`}>Love Alarm 2.0 puts emphasis on personal information of customers, and observes relevant laws including Act on Promotion of Information and Communication Network Utilization and Information Protection and guidelines enacted by relevant agencies. The Company, through the personal information handling policies, informs customers of for what purpose and how personal information provided by customers is used, and the actions taken by the Company for personal information protection.</h1>
                    {
                        Object.keys(privacyPolicy).map((item, i) => (
                            <React.Fragment key={item}>
                                <div className={`py-5`}>
                                    <h1 className={`text-rose-500 text-xl font-medium`}>{privacyPolicy[item].title}</h1>
                                    {privacyPolicy[item].description ? <p className={`text-gray-800 text-base text-justify my-2`}>{privacyPolicy[item].description}</p> : <></>}
                                    {privacyPolicy[item].points.map((txt, idx) => <p key={idx} className={`text-gray-700 text-base text-justify mt-1`}>• {txt}</p>)}
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default privacy_policy