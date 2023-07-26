import React from 'react'

function refund_policy() {
    return (
        <>

            <section className='flex flex-col gap-10 justify-between min-h-screen w-full'>
                <div className='policy max-w-4xl rounded-lg p-5 md:p-10 xl:px-20 !m-5 lg:!mx-auto border border-slate-200  bg-slate-50 filter backdrop-blur-lg'>
                    <h4 className="text-3xl lg:text-4xl font-semibold text-rose-500 text-center pb-2">Refund Policy </h4>

                    <div className="h-1 w-48 mx-auto mb-3 md:mb-5 bg-sky-500 rounded-lg"></div>

                    <p className={`text-gray-800 text-base text-justify mt-1`}>Last updated: July 22, 2023</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>Thank you for the purchase at Love Alarm 2.0 (a product from <a className='hover:text-rose-500' href='https://www.delanki.com/' target='_blank'>Delanki</a>).</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>The following terms are applicable for any products that You purchased with Us.</p>
                    <h3 className={`text-rose-500 text-xl font-medium mt-5`}>Interpretation and Definitions</h3>
                    <h2>Interpretation</h2>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>For the purposes of this Return and Refund Policy:</p>
                    <ul>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Product Love Alarm 2.0</strong> (referred to as either &quot;, &quot;We&quot;, &quot;Us&quot; in this Agreement) refers to Love Alarm 2.0.
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Company</strong> (referred to as either &quot;the Company&quot;, or &quot;Our&quot; in this Agreement) refers to Delanki.
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Subscription</strong> refer to the items offered for sale on the Service.
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Orders</strong> mean a request by You to purchase Subscription from Us.
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Service</strong> refers to the Website.
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>Website</strong> refers to Love Alarm 2.0, accessible from <a className='hover:text-rose-500' href={process.env.host}>{process.env.host}</a>
                        </li>
                        <li className='text-gray-700 text-justify mt-1'>• <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        </li>
                    </ul>
                    <h3 className={`text-rose-500 text-xl font-medium mt-5`}>Your Purchased Subscription Cancellation Rights</h3>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>You are entitled to cancel Your purchased Subscription within 7 days without giving any reason for doing so.</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>The deadline for cancelling a purchased Subscription is 7 days from the date on which You received the Subscription or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                    <ul>
                        <li className='text-gray-700 text-justify mt-1'>• By visiting this page on our website: <a className='hover:text-rose-500' href={process.env.host + '/contact'}>{process.env.host}/contact</a></li>
                    </ul>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>We will reimburse You no later than 14 days from the day on which We receive the returned Subscription. We will use the same means of payment as You used for the purchased Subscription, and You will not incur any fees for such reimbursement.</p>
                    <h3 className={`text-rose-500 text-xl font-medium mt-5`}>Conditions for Returns</h3>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>In order for the Subscription to be eligible for a return, please make sure that:</p>
                    <ul>
                        <li className='text-gray-700 text-justify mt-1'>• The Subscription were purchased in the last 7 days</li>
                    </ul>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>The following Subscription cannot be returned:</p>
                    <ul>
                        <li className='text-gray-700 text-justify mt-1'>• The supply of Subscription made to Your specifications or clearly personalized.</li>
                        <li className='text-gray-700 text-justify mt-1'>• The supply of Subscription which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                        <li className='text-gray-700 text-justify mt-1'>• The supply of Subscription which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                        <li className='text-gray-700 text-justify mt-1'>• The supply of Subscription which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                    </ul>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>Only regular priced Subscription may be refunded. Unfortunately, Subscription on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                    <h3 className={`text-rose-500 text-xl font-medium mt-5`}>Returning Subscription</h3>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>You are responsible for the cost and risk of returning the Subscription to Us. You should send the Subscription information to our contact mail and customer support</p>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>We cannot be held responsible for Subscription damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Subscription or proof of received return delivery.</p>
                    <h2>Contact Us</h2>
                    <p className={`text-gray-800 text-base text-justify mt-1`}>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                    <ul>
                        <li className='text-gray-700 text-justify mt-1'>• By visiting this page on our website: <a className='hover:text-rose-500' href={process.env.host + '/contact'} >{process.env.host}/contact</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default refund_policy