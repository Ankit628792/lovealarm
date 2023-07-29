'use client'
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Play from '../assets/google-play.png'
import Android from '../assets/android.png'
import Apple from '../assets/apple.png'
import Subscription from '../assets/subscription.png'
import AK from '../assets/AK.png'
import Accordion from "@/components/Accordion";
import Link from "next/link";
import Features from "@/components/Features";
import Nearby from '../assets/nearby.png'
import LoveAlarm from '../assets/lovealarm.png'


const faq = [
  {
    id: 3,
    title: 'Why is the Love alarm?',
    description: `Why is it so hard to tell someone you like them when you like them? It has to ring if you like someone in the world we live in now. It’s not just an app that rings alarm, it’s is a way of expressing how you felt about someone.`
  }, ,
  {
    id: 3,
    title: `How can I temporarily deactivate the alarm`,
    description: 'You can deactivate the love alarm temporarily by holding the heart for 3s if you want to hide your feelings. You can slightly touch the power button on screen to reactivate Love alarm.'
  },
  {
    id: 4,
    title: 'What about fake profiles?',
    description: `We remove the fake profiles from time to time. This ensures that our users are interacting with real people. We strive to create a safe and secure environment for our users. From you, make sure the person you’re ringing the alarm is in front of your eyes.`
  },
  {
    id: 5,
    title: 'How many times can I ring someone’s alarm?',
    description: `As many as you can, there is no limit to ring someone’s alarm.`
  },

];

export default function Home() {

  return (
    <>
      <main className='relative flex-grow min-h-screen'>
        <ScrollToTop />

        <section className="bg-rose-500 rounded-br-full min-h-[90vh] w-full flex flex-col md:flex-row items-center justify-center md:gap-20">
          <div className="p-5 py-20 md:py-0">
            <h1 className="text-white sm:text-3xl font-medium mb-3 text-center md:text-left">Presenting <br /><strong className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl ">Love Alarm 2.0</strong></h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white text-center md:text-left">A new way to tell someone, you like them.</p>
            <p className="sm:text-lg text-gray-100 text-center md:text-left">Download now and get a subscription for free</p>

            <h1 className="text-rose-500 bg-white max-w-max text-lg font-medium mt-4 mx-auto md:mx-0 py-2 px-4 rounded-lg">Available from August 1st</h1>
            {/* <div className="flex items-center justify-center md:justify-start gap-4 my-6 flex-wrap transform scale-90 sm:scale-100">
              <div className="flex items-center gap-2 bg-black text-white rounded-full max-w-max py-2 px-5 cursor-pointer">
                <div className="relative w-7 h-7">
                  <Image alt="love alarm play store" src={Play.src} blurDataURL={Play.blurDataURL} fill={true} />
                </div>
                <strong>Play Store</strong>
              </div>
              <div className="flex items-center gap-2 bg-green-500 text-white rounded-full max-w-max py-2 px-5 cursor-pointer">
                <div className="relative w-7 h-7">
                  <Image alt="love alarm android" src={Android.src} blurDataURL={Android.blurDataURL} fill={true} />
                </div>
                <strong>Download APK</strong>
              </div>
            </div> */}
          </div>
          <div className="h-[600px]">
            <img src={LoveAlarm.src} className="w-full h-full object-contain" alt="love alarm" />
          </div>
        </section>

        <section className='min-h-screen w-full p-5 flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-center text-rose-500 text-4xl lg:text-5xl 2xl:text-6xl 2xl:max-w-xl max-w-lg mx-auto'>About Love 2.0</h1>
          <p className='lg:text-lg text-center max-w-3xl mx-auto my-4 text-gray-500'>It is now possible to ring someone's alarm in real life. When you and the other person come within 10m, your crush's  alarm will go off.</p>

          <div className="relative w-80 h-80 mx-auto">
            {
              [...Array(6).fill().keys()].map((index) => (
                <div key={index} className={`absolute w-80 h-80 ring-spin`}
                  style={index % 3 == 1 ? { transform: `translateX(${Math.round(Math.random() * 20)}px)` } : index % 3 == 2 ? { transform: `translateY(${Math.round(Math.random() * 20)}px)` } : { transform: `transform(${Math.round(Math.random() * 20)}px, ${Math.round(Math.random() * 20)}px)` }}
                >
                  <svg className={`w-full h-full`} style={{ transform: [{ scale: 1.1 }] }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path strokeWidth={1} stroke={index % 3 == 0 ? '#FF0066' : index % 3 == 1 ? '#6a5acd' : '#1e90ff'} fill="none" d="M47.8,-73.9C62.2,-65.1,74.3,-52.3,81.3,-37.1C88.3,-21.9,90.3,-4.3,87.6,12.4C84.8,29,77.3,44.7,66.3,57.3C55.2,70,40.7,79.5,24.8,84C8.9,88.4,-8.4,87.9,-25.3,83.9C-42.2,80,-58.8,72.7,-70,60.3C-81.1,48,-86.9,30.7,-89.1,13C-91.2,-4.6,-89.9,-22.5,-82.9,-37.9C-75.9,-53.3,-63.4,-66.2,-48.6,-74.9C-33.9,-83.5,-16.9,-88,-0.1,-87.8C16.7,-87.6,33.4,-82.8,47.8,-73.9Z" transform="translate(100 100)" />
                  </svg>
                </div>
              ))
            }
            <div className="max-w-max max-h-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-32 h-32 text-rose-500  filter drop-shadow-lg shadow-rose-400`}>
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
          </div>
        </section>


        <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
          <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row-reverse items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-20 min-h-[80vh]`}>
            <div className='flex-grow'>
              <h1 className='font-semibold text-red-500 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>Manage Your Alarm</h1>
              <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center lg:text-left leading-relaxed'>You can access who you want to ring alarms for and who you want to ring alarms for. It is possible for you to control your feelings on your own volition</p>
              <div className="flex items-center justify-center lg:justify-start">
                <Link href={'/how-it-works'}>
                  <button type="button" className="max-w-max my-4">
                    <h1 className="text-white bg-rose-500 py-2 px-5 rounded-lg font-medium">Learn How it works</h1>
                  </button>
                </Link>
              </div>
            </div>
            <div className='max-w-lg w-full h-[650px] rounded-2xl overflow-hidden flex-grow relative'>
              <Image placeholder="blur" blurDataURL={Nearby.blurDataURL} src={Nearby.src} priority={false} loading="lazy" className='hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow' alt="how to manage alarm" fill={true} />
            </div>
          </div>
        </section>

        <section className='sm:min-h-[80vh] grid place-items-center max-w-7xl mx-auto w-full'>
          <div className={`flex flex-col gap-10 xl:gap-16 lg:flex-row items-center justify-center w-full mx-auto my-10 p-5 py-10 sm:px-10 xl:px-16 min-h-[70vh]`}>
            <div className='flex-grow'>
              <h1 className='font-semibold text-rose-500 text-4xl sm:text-5xl my-3 text-center lg:text-left lg:max-w-md'>Get Free Subscription</h1>
              <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>Access the prime features like stop ringing alarm either yours or others', match access and chat access with enhanced securities. </p>
              <p className='text-gray-500 max-w-2xl lg:max-w-sm 2xl:max-w-xl 2xl:text-lg text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>Download now to see for yourself how our product can help you. After the trial period, you can decide if you want to purchase a subscription and unlock all the features.</p>
              <div className="flex items-center justify-center lg:justify-start">
                <button type="button" className="max-w-max my-4">
                  <a href={`${process.env.host}/#download`}>
                    <h1 className="text-white bg-rose-500 py-2 px-5 rounded-lg font-medium">Download Now</h1>
                  </a>
                </button>
              </div>
            </div>
            <div className='max-w-lg w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden flex-grow relative'>
              <Image placeholder="blur" blurDataURL={Subscription.blurDataURL} src={Subscription.src} priority={false} loading="lazy" className='object-cover transition-transform duration-300 ease-in-out drop-shadow' alt="trial features" fill={true} />
            </div>
          </div>
        </section>

        <Features />

        <section className='flex flex-col items-center justify-center gap-4 py-20 bg-rose-500 min-h-[50vh] w-full max-w-7xl xl:rounded-xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl font-semibold text-white text-center'>Ring Your Love's Alarm</h1>
          <p className='text-xl lg:text-2xl text-gray-200 text-center'>It has to ring if you like someone in the world, we live in now</p>

          <h1 className="text-rose-500 bg-white max-w-max text-lg font-medium mt-8 mx-auto py-2 px-4 rounded-lg">Launching on August 1st</h1>
          <h1 className="text-white text-lg font-medium">Stay Tuned ....</h1>

          {/* <div className='flex flex-col sm:flex-row sm:items-center gap-8 py-6 flex-wrap justify-center'>
            <div className="flex items-center gap-2 bg-black text-white rounded-full max-w-max py-2 px-5 cursor-pointer">
              <div className="relative w-7 h-7">
                <Image src={Play.src} blurDataURL={Play.blurDataURL} fill={true} alt="love alarm play store" />
              </div>
              <strong>Play Store</strong>
            </div>
            <div className="flex items-center gap-2 bg-green-500 text-white rounded-full max-w-max py-2 px-5 cursor-pointer">
              <div className="relative w-7 h-7">
                <Image src={Android.src} blurDataURL={Android.blurDataURL} fill={true} alt="love alarm apk" />
              </div>
              <strong>Download APK</strong>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 text-gray-800 rounded-full max-w-max py-2 px-5 cursor-not-allowed">
              <div className="relative w-7 h-7">
                <Image src={Apple.src} blurDataURL={Apple.blurDataURL} fill={true} alt="love alarm app store" />
              </div>
              <strong>Coming Soon</strong>
            </div>
          </div> */}

        </section>
        <section className='sm:min-h-[100vh] flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-20'>
          <h1 className='text-3xl sm:text-4xl xl:text-5xl text-rose-500 text-center mb-10 font-semibold '>Frequently Asked Questions</h1>
          <div className='w-full max-w-7xl py-2'>
            {faq.map((item, i) => (
              <Accordion key={i} title={item.title} content={item.description} />
            ))}
          </div>
          <Link href='/frequently-ask-questions'>
            <button className="bg-rose-500 text-white mt-5 cursor-pointer px-6 py-2 text-xl font-medium rounded-full mx-auto flex items-center min-w-max">View All </button>
          </Link>
        </section>


      </main >
    </>
  )
}
