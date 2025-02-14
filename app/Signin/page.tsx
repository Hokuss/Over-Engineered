"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Signin = () => {
  const { data: session } = useSession()
  if(session){
    const router = useRouter();
    router.push('/profile');
  }
  else return (
    <div className="w-full h-full bg-emerald-100">

  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-emerald-900 sm:text-3xl">Sign In</h1>

     <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      To experiene the awesomeness, Signin Now!
     </p>

      <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

       <div>
          <label htmlFor="email" className="sr-only">Email</label>

         <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?
        <a className="underline" href="#">Sign up</a>
      </p>
    </form>

    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">OR</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>

    <div className="flex justify-center">
    <button className="border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:shadow transition duration-150 w-5/6 bg-white text-gray-500 hover:text-gray-800 px-4 py-2" onClick={()=> {signIn("google")}}>
        <div className="flex justify-center">
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span className="">Login with Google</span>
        </div>
    </button>
    </div>
    <div className="w-full h-4"></div>
    <div className="flex justify-center">
    <button className="border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:shadow transition duration-150 w-5/6 bg-white text-gray-500 hover:text-gray-800 px-4 py-2" onClick={()=> {signIn("github")}}>
        <div className="flex justify-center">
          <img className="w-6 h-6" src="/github-color-svgrepo-com.svg" loading="lazy" alt="google logo" />
          <span className="">Login with Github</span>
        </div>
    </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Signin;