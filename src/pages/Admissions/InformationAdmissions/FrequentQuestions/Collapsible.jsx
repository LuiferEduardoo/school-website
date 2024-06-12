import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
        setHeight(isOpen ? "0px" : `${contentRef.current.scrollHeight}px`);
    };

    return (
        <div className="collapsible">
            <button className="collapsible-header bg-gray-200 hover:bg-gray-300 text-gray-700 flex aling-center justify-between rounded-lg p-4" onClick={toggleCollapsible}>
                {title}
                <IoIosArrowDown />
            </button>
            <div
                ref={contentRef}
                style={{ height: height }}
                className="collapsible-content"
            >
                <div className="collapsible-content-inner">{children}</div>
            </div>
        </div>
    );
};

export default Collapsible;
