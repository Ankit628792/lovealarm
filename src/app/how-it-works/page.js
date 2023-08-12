import React from 'react'
import Activate from '../../assets/activate.png'
import Three from '../../assets/three.png'
import Image from 'next/image'
import Head from 'next/head'

import Nearby from '../../assets/nearby.png'
import Others from '../../assets/others.png'
import Yours from '../../assets/yours.png'
import Chat from '../../assets/chat.png'

export const metadata = {
    metadataBase: new URL(process.env.host),
    title: 'Love 2.0 | How it works for Love Alarm 2.0',
    author: 'ankit628792',
    description: 'Learn how to use love alarm app: how to ring alarm, stop ringing, initiating a conversation, temporarily disable account and much more. Explore now, Love alarm 2.0 provide you what you have expected',
    openGraph: {
        title: 'Love Alarm 2.0 | How it works for Love Alarm 2.0',
        description: 'Learn how to use love alarm app: how to ring alarm, stop ringing, initiating a conversation, temporarily disable account and much more. Explore now, Love alarm 2.0 provide you what you have expected',
        url: process.env.host + '/how-it-works',
        siteName: 'Love Alarm 2.0',
        images: '/android-chrome-512x512.png',
    }
}

function page() {
    return (
        <>
            <Head>
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <meta name='keywords' content='love alarm app, love alarm, love alarm 2.0 , 사랑알람 2.0 , 사랑알람 , 사랑알람 2.0 앱, 사랑알람 앱, love alarm app 2.0, love alarm version 2 working, love 2.0, love, ankit ,ankit62879, kim so hyun, kim so-hyun ,love alarm download, love alarm apk, love alarm 2.0 privacy policy, love alarm ios, love alarm version2 ios,  love alarm website , love alarm 2.0 website, love alarm 2.o website, 러브알람 2.0 홈페이지, 러브알람 홈페이지,, love alarm 2.o' />
            </Head>
            <main className='flex-grow'>
                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow space-y-2'>
                            <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 lkjhgfd lg:text-left lg:max-w-md'>How to ring someone&apos;s alarm</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step1: </strong>From Home screen, swipe left to get nearby users
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step2: </strong>Choose the person you want to ring the alarm
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step3: </strong>Tap on heart to ring
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step4: </strong>Next time, where you come in the radius of 10m of that user, the alarm rings
                            </p>
                        </div>
                        <div className='max-w-lg w-full h-[600px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={Nearby.blurDataURL} src={Nearby.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to ring others alarm" fill={true} />
                        </div>
                    </div>
                </section>
                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                        <div className='flex-grow space-y-2'>
                            <h1 className='font-semibold text-red-500 text-3xl sm:text-4xl my-3 lkjhgfd lg:text-left lg:max-w-md'>How to stop ringing someone&apos;s alarm?</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step1: </strong>From drawer, go to ring history and choose others alarm
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step2: </strong>Swipe left the person card that you want to stop ring
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step3: </strong>Tap remove, It won&apos;t ring until you don&apos;t want again, you can start ringing again from nearby users screen
                            </p>
                        </div>
                        <div className='max-w-lg w-full h-[600px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={Others.blurDataURL} src={Others.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to stop ringing alarm" fill={true} />
                        </div>
                    </div>
                </section>

                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow space-y-2'>
                            <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 lkjhgfd lg:text-left lg:max-w-md'>How to prevent your alarm from ringing by other person?</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step1: </strong>In ring history, choose your alarm
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step2: </strong>Swipe left the person card that you want from stop ring
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step3: </strong>Tap remove, It won&apos;t ring until another user does not ring again. If you remove that person multiple times, the person will be blocked permanently.
                            </p>
                        </div>
                        <div className='max-w-lg w-full h-[650px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={Yours.blurDataURL} src={Yours.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to prevent ringing alarm" fill={true} />
                        </div>
                    </div>
                </section>
                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                        <div className='flex-grow space-y-2'>
                            <h1 className='font-semibold text-red-500 text-3xl sm:text-4xl my-3 lkjhgfd lg:text-left lg:max-w-md'>How to start a conversation on app?</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step1: </strong>You both requires to ring each other alarm to get a match
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step2: </strong>After that, you can start a conversion
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd lg:text-left leading-relaxed'>
                                <strong>Step3: </strong>You need to have subscription to access this feature
                            </p>
                        </div>

                        <div className='max-w-lg w-full h-[450px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={Chat.blurDataURL} src={Chat.src} priority={false} loading="lazy" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="start a conversation on love alarm" fill={true} />
                        </div>
                    </div>
                </section>
                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow space-y-2'>
                            <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 lkjhgfd lg:text-left lg:max-w-md'>How to temporarily disable the alarm?</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step1: </strong>Hold your heart for some seconds, your alarm will deactivate temporarily until you don&apos;t active
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step2: </strong>To activate the alarm, press the tap on power button on screen
                            </p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg lkjhgfd mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                                <strong>Step3: </strong>Also, your alarm will deactivate, even if you log out from the app.
                            </p>

                        </div>
                        <div className='max-w-lg w-full h-[650px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={Activate.blurDataURL} src={Activate.src} priority={false} loading="lazy" className='object-cover transition-transform duration-300 ease-in-out drop-shadow' alt="disable love alarm" fill={true} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default page