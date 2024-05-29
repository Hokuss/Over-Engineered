import Head from "next/head";
import React from "react";
import Button from "./components/navigation/navbar/button";

export const Footer = () => {
    return (
<footer className="text-gray-600 bg-emerald-300 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Over-Engineered</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">I don't know why I created this. But I knew I just had to. </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-900">1 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">2 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">3 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">4 Link</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-900">1 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">2 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">3 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">4 Link</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Side</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-900">1 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">2 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">3 Link</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-900">4 Link</a>
                </li>
                </nav>
            </div>
            <div className= "grid grid-cols-2">
                <a className="text-gray-500" href="https://facebook.com">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500" href="https://x.com">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500" href="https://instagram.com">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500" href="http://linkedin.com">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
                </a>
                
            </div>
        </div>
    </div>
    <div className="bg-emerald-300">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">@ 2024 Over-Engineered </p>
        </div>
    </div>
</footer>
    )
}

export const Content = ({Heading, text, HL1, HL2}: {Heading: String, text: String, HL1: any, HL2: any}) => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[rgba(165,255,219,0.5)]">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {Heading}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {text}
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  {HL1}
                </h6>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  {HL2}
                </h6>
              </div>
            </div>
            <div className="gap-8 row-gap-8">
              <Button text="Read More ->"/>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

