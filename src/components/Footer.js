
import Link from 'next/link'
import React from 'react'

function Footer() {

    return (
        <footer>
            <div className='px-5 py-10 text-white bg-gradient-to-t from-black to-slate-900 '>
                <div className='flex flex-col md:flex-row items-start justify-between w-full gap-y-10 max-w-7xl mx-auto py-4'>
                    <div className="text-3xl font-semibold text-white flex-shrink-0 cursor-pointer">
                        <Link href={"/"}>Love Alarm 2.0</Link>
                        <p className='text-gray-300 font-normal text-lg max-w-md mt-2'>An application that lets the user know if someone who loves them is present within a 10m radius</p>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap gap-x-20 gap-y-10'>
                        <div className='flex flex-col gap-2 w-full'>
                            <h1 className='text-xl font-medium'>Legals</h1>
                            <Link href="/terms-and-conditions" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>Terms &amp; Conditions</Link>
                            <Link href="/privacy-policy" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>Privacy Policy</Link>
                            <Link href="/refund-policy" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>Refund Policy</Link>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h1 className='text-xl font-medium'>Others</h1>
                            <Link href="/how-it-works" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>How It Works</Link>
                            <Link href="/our-story" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>Our Story</Link>
                            <Link href="/contact-us" className='text-lg text-left text-gray-300 cursor-pointer hover:text-rose-500 min-w-max'>Contact Us</Link>
                        </div>
                    </div>
                </div>

                <hr className='text-gray-300 my-4 max-w-7xl mx-auto' />

                <h1 className='text-center text-lg tracking-wider'>Copyright &copy; 2023, Love Alarm 2.0 developed under <a className='hover:text-rose-500' href='https://www.delanki.com/' target='_blank'>Delanki</a></h1>
            </div>
        </footer>
    )
}

export default Footer