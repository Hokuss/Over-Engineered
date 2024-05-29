import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
import SearchBar from "./SearchBar";

const Navbar = ({ toggle }: { toggle: () => void}) => {
    return (
        <>
            <div className="w-full h-20 bg-emerald-800 sticky top-1 rounded-xl opacity-90">
                <div className="mx-auto px-5 h-full">
                    <div className="flex items-center h-full justify-between">
                        {/* Justify between bkc */}
                        <Logo />
                        
                        <button type="button" className="inline-flex items-center md:hidden"
                            onClick={toggle}>
                            {/* Menu icon */}
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24">
                            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                            </svg>
                        </button>
                        <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/about">
                                <p>About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Services">
                                <p>Services</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Side">
                                <p>Side</p>
                            </Link>
                        </li>
                        <li>
                            <SearchBar />
                        </li>
                        </ul>
                        <div className="hidden md:block space-x-2"> 
                            <Link href = "/Signin">
                                <Button text = "Sign In"/>
                            </Link>
                            <Link href = "/SignUp">
                                <Button text = "Sign Up"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;