
export const metadata = {
    title: 'Love 2.0 | Page Not Found',
    author: 'ankit628792',
    description: 'Looks like that love alarm 2.0 page that you are trying to access is not exist, make sure you are accessing the correct page'
}

function Error() {
    return (
        <>
            <section className='flex flex-col justify-between w-full flex-grow'>
                <img src='/404.svg' className='max-h-[500px] mx-5 my-20 sm:m-16' alt='page not found' />
            </section>
        </>
    )
}

export default Error