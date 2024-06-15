import React from "react";
import { Cards } from "./cards";

const Articles = ({params}:{params:any}) => {
    return (
        <>
            <div className="bg-emerald-100">
                <div className="flex justify-center pt-10">
                    <img src = "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" width={70} alt = "screw" className="rounded-full mr-6 translate-y-[-15%]"></img>
                    <h2 className="text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">@{params.username}</h2>
                </div>
                <div className="flex-col mx-24 space-y-8 pt-5 pb-40">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <div className="flex justify-center">
                        <button className="bg-slate-600 text-white px-4 py-2 rounded-xl hover:shadow-lg hover:bg-slate-800">More Articles...</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles;