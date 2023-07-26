'use client'
import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { fadeOut, pageTransition } from '../util'


function Accordion({ title, content, desc }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={`max-w-xl md:max-w-2xl lg:max-w-3xl mb-3 md:mb-5 cursor-pointer mx-auto rounded-lg`}>
            <div className="text-gray-800 blur-blue font-semibold px-5 py-2 text-lg space-x-4 flex items-center justify-between" onClick={() => setIsActive(!isActive)}>
                <h1>Q. {title}</h1>
                {
                    isActive ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                }
            </div>
            {isActive &&
                <> <p initial="initial"
                    className="text-base blur-black rounded-b-md text-gray-800 py-1 px-6 pb-4 text-justify opac">{content}
                </p>
                </>}
        </div>
    )
}

export default Accordion