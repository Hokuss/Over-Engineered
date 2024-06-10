import React from "react";
import { Cards } from "./cards";

const Articles = ({params}:{params:any}) => {
    return (
        <>
            <div className="bg-emerald-100">
                <div className="bg-white">
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Articles;