import Contact from '@/components/Contact'

export const metadata = {
    title: 'Love 2.0 | Contact Us',
    description: 'Contact Love alarm if you have any questions and facing any issue.  We’re happy to hear from you! Contact us today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!'
}

function page() {
    return (
        <section className='flex-grow'>
            <Contact />
        </section>
    )
}

export default page