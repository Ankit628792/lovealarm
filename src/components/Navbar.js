'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

let colorHex = 'rgba(230, 50, 100, 1)'
let color = '#E63264'
const menuItems = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'How it works',
        link: '/how-it-works'
    },
    {
        id: 3,
        title: 'Our Story',
        link: '/our-story'
    },
    {
        id: 4,
        title: 'Contact Us',
        link: '/contact-us'
    },
]

function Navbar() {
    const [checkedSate, setCheckedSate] = useState(false);
    const handleCheckedSate = () => {
        checkedSate ? setCheckedSate(false) : setCheckedSate(true)
    }
    return (
        <>
            <nav className={`w-full sticky top-0 bg-rose-500 z-40`}>
                <div className='max-w-7xl flex items-center justify-between mx-auto text-white px-5'>
                    <Link href={"/"}>
                        <div className='flex items-center opacity-0 md:opacity-100'>
                            <Image src={"/android-chrome-512x512.png"} width={70} height={70} alt='love alarm app logo' className='mix-blend-lighten rounded-full' />
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
                        <Link href={`/#download`}>
                            <button className='py-2 px-5 rounded-full bg-white text-rose'>
                                <strong>Download App</strong>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            {/* <!-- hamburger menu --> */}
            <nav className="hamburger-menu">
                <label>
                    <input type='checkbox' checked={checkedSate} onChange={handleCheckedSate} />
                    <span className='hamburger-inner'> <span className='hamburger-icon shadow-lg fixed'></span> </span>
                    <ul>
                        {menuItems.map(({ title, id, link }) => <li key={id} onClick={handleCheckedSate}> <a href={link}>{title}</a></li>)}
                    </ul>
                </label>
            </nav>
            {/* <!-- hamburger menu --> */}
        </>
    )
}

export default Navbar