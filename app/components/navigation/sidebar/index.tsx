"use client";
import Link from "next/link";
import Button from "../navbar/button";
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const { data: session } = useSession()
  if(session){
    return (
      <>
        <div
          className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
          style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
          }}
        >
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
          <li className="space-x-2 flex">
            <img src={session.user?.image!} className="h-12 rounded-3xl"/>
            <button className="h-12 font-bold px-5 border-solid border-2 rounded-xl hover:border-dotted" onClick={() => signOut()}>Sign Out</button>
          </li>
        </ul>
      </div>

      </>
    )
  }
  else return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
          <li className="space-x-2">
            <Link href = "/Signin">
              <Button text = "Sign In"/>
            </Link>
            <Link href = "/SignUp">
              <Button text = "Sign Up"/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;