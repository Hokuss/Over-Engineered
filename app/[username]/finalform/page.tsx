"use client"
import React from "react";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";


const finalform = ({params} : {params:any}) => {
  const router = useSearchParams()
  const amt = router.get('amount')
  const Price:Number = +amt!
    return (
        <>
          <section className="bg-gray-800 py-8 dark:bg-gray-800 md:py-4">
            <div className="bg-red-100 border border-red-400 text-red-700 mx-4 px-4 py-4 my-3 rounded relative" role="alert">
              <strong className="font-bold">Warning!</strong><br/>
              <span className="block sm:inline">The website doesn't support direct payment. Please contact the creator to get their payment method and then fill it in the Form to complete the transaction. Your donation will be approved after Creator approves.</span>
            </div>
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 mb-24">
              <div className="lg:flex lg:items-start lg:gap-10 xl:gap-16">
                <div className="min-w-0 flex-1 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name* </label>
                        <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                      </div>

                      <div>
                        <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                        <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                        </div>
                        <select id="select-country-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                          <option selected>India</option>
                        </select>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                        </div>
                        <select id="select-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                          <option selected>New Delhi</option>
                          <option value="NY">Kolkata</option>
                          <option value="LA">Chennai</option>
                          <option value="CH">Mumbai</option>
                          <option value="HU">Hyderabad</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                        <div className="flex items-center">
                          
                          <div className="relative w-full">
                            <input type="text" id="phone-input" className="z-20 block w-full rounded-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                        <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                      </div>

                      <div>
                        <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                        <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
                      </div>

                      <div>
                        <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                        <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" required />
                      </div>

                      <div className="sm:col-span-2">
                        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                          </svg>
                          Add new address
                        </button>
                      </div>
                    </div>
                  </div>

                  
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Doantion Details</h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Creators name* </label>
                        <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={params.username} required disabled />
                      </div>

                      <div>
                        <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Subscription Amount* </label>
                        <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={Price} required disabled />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email* </label>
                        <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required value={params.username + "@gmail.com"} disabled/>
                      </div>

                      <div>
                        <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Payment ID* </label>
                        <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Payment ID" required />
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                    <div className="flex max-w-md items-center gap-4">
                      <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                      <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                    </div>
                  </div> */}
                </div>

                <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                  <div className="flow-root">
                    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${Price}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                        <dd className="text-base font-medium text-green-500">0</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Platform Fees</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">$0</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${0.1*Price}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">${1.1*Price}</dd>
                      </dl>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href={"/" + params.username}>
                      <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-red-600">Proceed to Payment</button>
                    </Link>

                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <Link href="/Signin" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now</Link>.</p>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </>
    )
}

export default finalform;