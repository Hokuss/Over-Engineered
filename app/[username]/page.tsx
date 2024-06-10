import React from "react";
import Link from "next/link";

const profile = ({params}:{params:any}) => {
    return (
        <>
            <section className="relative pt-96 bg-cover bg-center bg-[url('/images/onlyfans.jpg')]">
                    <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-emerald-100 w-full shadow-xl rounded-lg -mt-64">
                        <div className="translate-y-[-10%]">
                        <div className="flex justify-center items-center">
                            <div className="w-full lg:w-3/12 px-4 flex justify-center">
                                <div className="">
                                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="rounded-full "></img>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-semibold leading-normal mb-2">
                            {params.username}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            Los Angeles, California
                            </div>
                            <div className="mb-2 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                            </div>
                            <div className="mb-2">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                            </div>
                            <div className="w-full justify-center">
                                <div className="flex justify-center py-4 pr-5">
                                    <div className="mr-2 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide">22</span><span className="text-sm text-blueGray-400">Subscribers</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide">10</span><span className="text-sm text-blueGray-400">Articles</span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide">89</span><span className="text-sm text-blueGray-400">Loves</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Link href = {"/" + params.username + "/payments"} >
                                <button className="bg-indigo-950 rounded-lg text-white py-2 px-3">Subscribe</button>
                            </Link>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                An artist of considerable range, Jenna the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                performs and records all of his own music, giving it a
                                warm, intimate feel with a solid groove structure. An
                                artist of considerable range.
                                </p>
                                <Link href={params.username + "/articles"} className="font-normal text-pink-500">Show Articles</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </section>
        </>
    )
}

export default profile;