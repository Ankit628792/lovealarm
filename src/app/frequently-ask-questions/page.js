import { faqs } from "@/utils";
import Accordion from "../../components/Accordion";

export const metadata = {
    title: 'Love 2.0 | FAQs',
    description: 'Have some questions in mind regarding love alarm, check love alarm 2.0 faq page. Most of the time your problem answer is present if you still have any, contact us'
}


function faq() {

    return (
        <>
            <div className="pb-20 pt-10">
                <h1 className="text-4xl md:text-5xl font-semibold text-rose-500 text-center mt-10">Frequently Asked Questions</h1>
                <div className="h-1 w-48 mx-auto my-3 md:my-5 bg-sky-500 rounded-lg"></div>
                <div className="p-5">
                    {Object.keys(faqs).map((key, i) => (
                        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10">
                            <h1 className="text-3xl font-medium text-rose-500 pb-3 mb-3 border-b-2 border-b-rose-400">{key}</h1>
                            {faqs[key].map(((item, index) => (
                                <Accordion key={i + index} title={item.title} content={item.description} />
                            )))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default faq