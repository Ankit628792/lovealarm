"use client"
export const metadata = {
    title: 'Love 2.0 | Internal server error',
    author: 'ankit628792',
    description: 'Looks like that love alarm 2.0 server got some issue, try again again some time it will be available soon.'
}

function Error() {
    return (
        <>
            <section className='flex flex-col justify-between w-full flex-grow'>
                <img src='/500.svg' className='max-h-[500px] mx-5 my-20 sm:m-16' alt='internal server error' />
            </section>
        </>
    )
}

export default Error