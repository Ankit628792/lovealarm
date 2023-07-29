
"use client"
import { useState } from "react"
import Image from 'next/image'
import Mail from '../assets/mail.png'
import validator from 'validator'

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        e?.preventDefault();
        setError("")
        setData({ ...data, [e.target.id]: e.target.value })
    }

    function hasNumber(v) {
        return v.length && /\d/.test(v);
    }

    console.log()

    const handleSubmit = async (e) => {
        e?.preventDefault();
        if (data?.name?.toString()?.length < 3) {
            return setError("Please enter a valid name")
        }
        if (data?.mobile?.toString()?.length < 10 || !hasNumber(data.mobile)) {
            return setError("Please enter a valid contact number")
        }
        if (data?.message?.toString()?.length < 10) {
            return setError("Please describe your message in detail")
        }
        if (data?.email) {
            if (!validator.isEmail(data.email)) {
                return setError("Please enter a valid email")
            }
        }

        try {
            setLoading(true)
            let res = await fetch(process.env.contact_url, {
                method: 'POST', body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.status == 200) {
                window.scrollTo(0, 0);
                setSuccess(true);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError("Unable to send message")
        }
    }


    return (
        <>
            {
                success
                    ?
                    <div className='px-5 min-h-[80vh] flex flex-col items-center justify-center'>
                        <div className='relative'>
                            <Image src={Mail.src} blurDataURL={Mail.src} width={160} height={160} alt="mail image icon" />
                        </div>
                        <h1 className='text-2xl sm:text-3xl xl:text-4xl font-medium py-2 text-rose-500 text-center'>Thanks for contacting us</h1>
                        <p className='text-gray-500 sm:text-lg text-center'>We'll contact you back as soon as possible</p>
                    </div>
                    :
                    <div className="isolate bg-white px-6 py-16 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-semibold text-rose-500 sm:text-4xl lg:text-5xl">Contact us</h2>
                            <p className="mt-2 sm:text-lg text-gray-600">
                                We’re happy to hear from you! Contact us (<span className="text-sky-500 hover:text-sky-600">or mail to contact@lovealarm.in</span>) today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="mx-auto max-w-xl mt-5">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6">

                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={data.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            placeholder="Your full name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            placeholder="Your active email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="mobile" className="block text-base font-medium leading-6 text-gray-900">
                                        Contact number
                                    </label>
                                    <div className="relative mt-2.5">
                                        <input
                                            type="tel"
                                            name="mobile"
                                            id="mobile"
                                            value={data.mobile}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            maxLength={18}
                                            placeholder='Registered contact number with Country code'
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-base font-medium leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2 relative">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="What you want to say?"
                                            value={data.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>

                            <h1 className="h-12 mt-5 text-red-600">{error}</h1>

                            <div className="">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-rose-500 px-3.5 py-2.5 text-center text-base font-medium text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                                >
                                    {
                                        loading
                                            ?
                                            <div className="w-6 h-6 mx-auto rounded-full border-[3px] border-b-transparent animate-spin border-white"></div>
                                            :
                                            <span>Send Message</span>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
