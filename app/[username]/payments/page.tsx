import React from "react";
import Link from "next/link";

const payments = ({params}:{params:any}) => {
    return (
        <>
            
            <div className="bg-emerald-200 px-4 py-16 min-h-screen">
            <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-30">
                <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-4 space-y-4 px-6 md:px-0">
                <h2 className="text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">Donations</h2>
                </div>
                <div className="flex justify-center py-4">
                    <img src = "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" width={70} alt = "screw" className="rounded-full mr-6 translate-y-[-10%]"></img>
                    <h2 className="text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">@{params.username}</h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div
                    className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-emerald-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                    <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Monthly</h2>
                    <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">$19</span> / Month
                    </p>
                    <ul className="list-none list-inside mb-6 text-center text-gray-300">
                    <li className="font-bold text-orange-600">Umlimited Articles</li>
                    <li>Special comment bubbles</li>
                    <li>Basic Fanfare</li>
                    <li>No voting rights</li>
                    </ul>
                    <Link className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    href = {{pathname:"/" + params.username + "/finalform",query:{amount:19}}}><span className="relative text-sm font-semibold text-black">Subscribe</span></Link>
                </div>
                <div
                    className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-emerald-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                    <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Quaterly</h2>
                    <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">$19</span> / Month
                    </p>
                    <ul className="list-none list-inside mb-6 text-center text-gray-300">
                    <li className="font-bold text-orange-600">Unlimited Articles & support</li>
                    <li>Custom Comment bubbles</li>
                    <li>Basic Fanfare</li>
                    <li>10% Cheaper</li>
                    </ul>
                    <Link
                    className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    href = {{pathname:"/" + params.username + "/finalform",query:{amount:57}}}><span className="relative text-sm font-semibold text-black">Subscribe</span></Link>
                </div>
                <div
                    className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-emerald-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                    <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Yearly</h2>
                    <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                    <span className="text-3xl sm:text-4xl font-bold text-white">$9</span> / Month
                    </p>
                    <ul className="list-none list-inside mb-6 text-center text-gray-300">
                    <li className="font-bold text-orange-600">Unlimited Articles & Direct Support</li>
                    <li>Custom comment bubbles</li>
                    <li>Advance Fanfare</li>
                    <li>25% Cheaper</li>
                    </ul>
                    <Link
                    className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    href = {{pathname:"/" + params.username + "/finalform",query:{amount:108}}}><span className="relative text-sm font-semibold text-black">Donate</span></Link>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default payments;