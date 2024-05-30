import React, { useState } from "react";
import { RiCloseFill, RiMore2Fill } from "react-icons/ri";
import ProfileInformation from "./../ProfileInformation";
import Nav from "./Nav";

const Sideber = () => {
    const [showSideber, setshowSideber] = useState(false);
    const [showScrool, setShowScrool] = useState(false);

    return (
        <div className={`bg-white h-full p-8 border-r fixed lg:static w-[80%] md:w-[50%] lg:w-full transition-all z-50 duration-300 ${
            showSideber ? "left-0" : "-left-full"
        } ${showScrool ? "overflow-y-auto" : "overflow-hidden"}`}>
            <div
                className="h-[40vh]"
                onMouseEnter={() => setShowScrool(true)}
                onMouseLeave={() => setShowScrool(false)}
            >
                <ProfileInformation />
                <Nav />
            </div>
            <button
                onClick={() => setshowSideber(!showSideber)}
                className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-200 p-2.5 rounded-full text-black z-50"
            >
                {showSideber ? <RiCloseFill /> : <RiMore2Fill />}
            </button>
        </div>
    );
};

export default Sideber;
