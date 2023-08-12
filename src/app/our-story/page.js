import React from 'react'
import wave from '../../assets/wave.svg'
import Two from '../../assets/two.png'
import Image from 'next/image'
import Team from '../../assets/team.jpg'
import LoveAlarm from '../../assets/love alarm.jpg'
import Head from 'next/head'
import LoveAlarm2 from '../../assets/lovealarm2.png'
import LoveAlarm1 from '../../assets/lovev1.png'


export const metadata = {
    metadataBase: new URL(process.env.host),
    title: 'Love 2.0 | Our Story about Love Alarm 2.0',
    author: 'ankit628792',
    description: 'The concept of Love alarm 2.0 originated from the netflix original series love alarm that is based on the Daum webtoon of the same name by Chon Kye-young. In a world where an app alerts people if someone in the vicinity likes them, Kim Jojo experiences young love while coping with personal adversities.',
    openGraph: {
        title: 'Love Alarm 2.0 | Our Story about Love Alarm 2.0',
        description: 'The concept of Love alarm 2.0 originated from the netflix original series love alarm that is based on the Daum webtoon of the same name by Chon Kye-young. In a world where an app alerts people if someone in the vicinity likes them, Kim Jojo experiences young love while coping with personal adversities.',
        url: process.env.host + '/our-story',
        siteName: 'Love Alarm 2.0',
        images: '/android-chrome-512x512.png',
    }
}

function page() {
    return (
        <>
            <Head>
                <meta name='keywords' content='love alarm story, love alarm, love alarm 2.0, 사랑알람 2.0 , 사랑알람 , 사랑알람 2.0 앱, 사랑알람 앱, love alarm app 2.0, love alarm concept, love 2.0, love, ankit62879, kim so hyun, kim-so-hyun, love alarm download, love alarm apk, love alarm limitation, ankit, ankit62879, kim so hyun, kim so-hyun,love alarm ios, love alarm version 2 ios, delanki, product company, product development company, love alarm website, love alarm 2.0 website, love alarm 2.o website, love alarm 2.o' />
                <link rel="icon" type="image/x-icon" href="favicon.ico" />
            </Head>
            <main className='flex-grow'>
                <img className='absolute inset-0 -z-10 2xl:max-w-[95%]' src={wave.src} alt="" />

                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow'>
                            <h1 className='font-semibold text-rose-500 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>Concept of the App</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>Love Alarm (Korean: 좋아하면 울리는) is a South Korean streaming television series starring Kim So-hyun, Jung Ga-ram and Song Kang. Based on the Daum webtoon of the same name by Chon Kye-young, it follows the life of a high school girl in a society greatly influenced by a mobile app capable of notifying whether someone within their vicinity has romantic feelings for them.</p>
                        </div>
                        <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={LoveAlarm.blurDataURL} src={LoveAlarm.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="love alarm app concept" fill={true} />
                        </div>
                    </div>
                </section>
                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                        <div className='flex-grow'>
                            <h1 className='font-semibold text-red-500 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>The Existence</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>Love Alarm revolves around the technology that syncs with users' hearts, measures love interests within a certain radius, and notifies users when someone nearby loves them, no guesswork, no awkward first dates, and certainly no cringy rejections either. As exciting as it may sound, this technology hardly existed in real life, at least not until now.</p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>The Love alarm first version still exists, but requires manually ringing the alarm not based on the users available nearby you.</p>
                        </div>
                        <div className='max-w-lg w-full h-[380px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={LoveAlarm1.blurDataURL} src={LoveAlarm1.src} priority={false} loading="lazy" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="love alarm version one" fill={true} />
                        </div>
                    </div>
                </section>

                <section className='md:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow w-full flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-rose-500 text-4xl sm:text-5xl my-3 text-center '>Limitations</h1>
                            <p className='text-gray-500  max-w-4xl 2xl:text-lg text-center mx-auto lg:mx-0 leading-relaxed'>In order to sync your heart in reality with the app, a hardware device is required to detect that just like smart watches. This allows the user to carry it with them every time.</p>
                            <p className='text-gray-500  max-w-4xl 2xl:text-lg text-center mx-auto lg:mx-0 leading-relaxed'>Additionally, it can be inconvenient and uncomfortable to use and affect the volition in many ways. Therefore, it is often not a viable option for many users.</p>
                        </div>
                        {/* <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Three.blurDataURL} src={Three.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="trial features" fill={true} />
                    </div> */}
                    </div>
                </section>

                <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                    <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                        <div className='flex-grow'>
                            <h1 className='font-semibold text-red-500 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>The Creation</h1>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>We have come up with a solution with just one tap ringing,  a step close to the love alarm concept where you just have to choose the person whose alarm you want to ring.</p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>The Love Alarm 2.0, however, uses GPS technology to track the location of users and sends an alert if someone within 10m radius loves you. With this new technology, users can find potential love matches more easily and quickly.</p>
                            <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>It allows you to choose the person that you like with your volition. That means it allows users to make informed decisions about who they choose to pursue, rather than relying on chance meetings or the opinion of the app.</p>
                        </div>
                        <div className='max-w-lg w-full h-[600px] rounded-2xl overflow-hidden flex-grow relative'>
                            <Image placeholder="blur" blurDataURL={LoveAlarm2.blurDataURL} src={LoveAlarm2.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="love alarm version two" fill={true} />
                        </div>
                    </div>
                </section>


                <section className='min-h-screen w-full p-5 flex flex-col items-center justify-center pt-10'>
                    <h1 className='font-semibold text-center text-rose-500 text-4xl lg:text-5xl 2xl:text-6xl 2xl:max-w-xl max-w-lg mx-auto'>Who We are?</h1>
                    <p className='lg:text-lg text-center max-w-4xl mx-auto my-4 text-gray-500'>We are part of <a className='text-rose-500 hover:text-rose-600 cursor-pointer' href='https://www.delanki.com' target='_blank'>Delanki</a>, a product development startup company, founded in 2023. We specialize in developing cutting-edge software products that solve everyday problems. Our team consists of engineers, designers, and entrepreneurs with a passion for innovation and creating products that make a difference. We are constantly pushing our limits and developing groundbreaking products that exceed customer expectations. We strive for excellence and are committed to creating products that can make a positive impact on the world.</p>

                    <div className={`h-[500px] w-full max-w-7xl rounded-xl overflow-hidden relative mt-10 mb-32`}>
                        <Image blurDataURL={Team.blurDataURL} src={Team.src} placeholder="blur" priority={false} loading="lazy" height={500} width={500} className='w-full h-full object-cover absolute inset-0' alt="delanki team" />
                        <div className='w-full h-full bg-black bg-opacity-80 z-10 absolute inset-0 grid place-items-center p-5'>
                            <p className='text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto my-4 text-gray-100' style={{ lineHeight: 1.5 }}>Our mission is to create innovative products and services that solve real world problems. We strive to make products that are simple and intuitive to use and affordable for everyone.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default page