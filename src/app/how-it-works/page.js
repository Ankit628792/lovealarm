import React from 'react'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import Image from 'next/image'

function page() {
    return (
        <main className='flex-grow'>
            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                    <div className='flex-grow space-y-2'>
                        <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 text-center lg:text-left lg:max-w-md'>How to ring someone&apos;s alarm</h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step1: </strong>From Home screen, swipe left to get nearby users
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step2: </strong>Choose the person you want to ring the alarm
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step3: </strong>Tap on heart to ring
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step4: </strong>Next time, where you come in the radius of 10m of that user, the alarm rings
                        </p>
                    </div>
                    <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Three.blurDataURL} src={Three.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="trial features" fill={true} />
                    </div>
                </div>
            </section>
            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                    <div className='flex-grow space-y-2'>
                        <h1 className='font-semibold text-red-500 text-3xl sm:text-4xl my-3 text-center lg:text-left lg:max-w-md'>How to stop ringing someone&apos;s alarm?</h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step1: </strong>From drawer, go to ring history and choose others alarm
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step2: </strong>Swipe left the person card that you want to stop ring
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step3: </strong>Tap remove, It won&apos;t ring until you don&apos;t want again, you can start ringing again from nearby users screen
                        </p>
                    </div>
                    <div className='max-w-lg w-full h-[600px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Two.blurDataURL} src={Two.src} priority={false} loading="lazy" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to manage alarm" fill={true} />
                    </div>
                </div>
            </section>

            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                    <div className='flex-grow space-y-2'>
                        <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 text-center lg:text-left lg:max-w-md'>How to prevent your alarm from ringing by other person?</h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step1: </strong>In ring history, choose your alarm
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step2: </strong>Swipe left the person card that you want from stop ring
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step3: </strong>Tap remove, It won&apos;t ring until another user does not ring again. If you remove that person multiple times, the person will be blocked permanently.
                        </p>

                    </div>
                    <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Three.blurDataURL} src={Three.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="trial features" fill={true} />
                    </div>
                </div>
            </section>
            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
                    <div className='flex-grow space-y-2'>
                        <h1 className='font-semibold text-red-500 text-3xl sm:text-4xl my-3 text-center lg:text-left lg:max-w-md'>How to start a conversation on app?</h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step1: </strong>You both requires to ring each other alarm to get a match
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step2: </strong>After that, you can start a conversion
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>
                            <strong>Step3: </strong>You need to have subscription to access this feature
                        </p>
                    </div>
                    <div className='max-w-lg w-full h-[600px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Two.blurDataURL} src={Two.src} priority={false} loading="lazy" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to manage alarm" fill={true} />
                    </div>
                </div>
            </section>
            <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
                <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
                    <div className='flex-grow space-y-2'>
                        <h1 className='font-semibold text-rose-500 text-3xl sm:text-4xl my-3 text-center lg:text-left lg:max-w-md'>How to temporarily disable the alarm?</h1>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step1: </strong>Hold your heart for some seconds, your alarm will deactivate temporarily until you don&apos;t active
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step2: </strong>To activate the alarm, press the tap on power button on screen
                        </p>
                        <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                            <strong>Step3: </strong>Also, your alarm will deactivate, even if you log out from the app.
                        </p>

                    </div>
                    <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
                        <Image placeholder="blur" blurDataURL={Three.blurDataURL} src={Three.src} priority={false} loading="lazy" className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="trial features" fill={true} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page