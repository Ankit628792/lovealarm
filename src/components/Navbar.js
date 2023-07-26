import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

let colorHex = 'rgba(230, 50, 100, 1)'
let color = '#E63264'

function Navbar() {
    return (
        <nav className={`w-full sticky top-0 bg-rose-500 z-40`}>
            <div className='max-w-7xl flex items-center justify-between mx-auto text-white px-5'>
                <Link href={"/"}>
                    <div className='flex items-center'>
                        <Image src={"/android-chrome-512x512.png"} width={70} height={70} className='mix-blend-lighten rounded-full' />
                        <h1 className='text-3xl font-semibold hidden sm:inline-block'>Love 2.0</h1>
                    </div>
                </Link>

                <ul className='items-center gap-6 xl:text-lg font-medium hidden md:flex'>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/how-it-works"}>How it works</Link>
                    </li>
                    <li>
                        <Link href={"/our-story"}>Our Story</Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>

                <div>
                    <Link href={`${process.env.host}/#download`}>
                        <button className='py-2 px-5 rounded-full bg-white text-rose'>
                           <strong>Download App</strong>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar