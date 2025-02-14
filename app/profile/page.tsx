"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const profile = () => {
    const {data:session} = useSession();
    if(!session){
        const router = useRouter();
        router.push('/Signin');
    }
    else return (
        <div className="w-full overflow-hidden bg-indigo-950">
        <div className="flex flex-col">
            {/* <!-- Cover Image --> */}
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                    className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

            {/* <!-- Profile Image --> */}
            <div className="sm:w-[80%] xs:w-[90%] mx-auto flex rounded-3xl">
                <img src={session!.user?.image!} alt="User Profile"
                        className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

                {/* <!-- FullName --> */}
                <h1
                    className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                    @{session!.user?.name}</h1>

            </div>

            <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
                <p className="w-fit text-gray-700 dark:text-gray-400 text-md">Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem
                    veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore
                    similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic
                    eligendi vitae animi nam in, est earum culpa illum aliquam.</p>


            {/* <!-- Detail --> */}
                <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                    <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                        <div className="w-full">
                            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div className="flex flex-col pb-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                                    <dd className="text-lg font-semibold">Samuel</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                                    <dd className="text-lg font-semibold">Abera</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                                    <dd className="text-lg font-semibold">21/02/1997</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                    <dd className="text-lg font-semibold">Male</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="w-full">
                            <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div className="flex flex-col pb-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                                    <dd className="text-lg font-semibold">Ethiopia, Addis Ababa</dd>
                                </div>

                                <div className="flex flex-col pt-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                    <dd className="text-lg font-semibold">+251913****30</dd>
                                </div>
                                <div className="flex flex-col pt-3">
                                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                    <dd className="text-lg font-semibold">{session!.user?.email}</dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    )
}

export default profile;