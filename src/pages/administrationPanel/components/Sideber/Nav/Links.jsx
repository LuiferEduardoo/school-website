import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    RiDashboardLine,
    RiArrowRightSLine,
    RiArrowUpSLine,
} from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { CSSTransition } from "react-transition-group";
import { ShowOptions } from "./../ShowOptions";

const Links = ({ isActive }) => {
    const [isShowOptionsContentManagement, setShowOptionsContentManagement] =
        useState(false);
    return (
        <>
            <li>
                <Link
                    to=""
                    className={`flex items-center gap-3 p-4 ${
                        isActive("") &&
                        "bg-gray-200 rounded-lg transition-colors"
                    }`}
                >
                    <RiDashboardLine />
                    Dashboard
                </Link>
            </li>
            <li>
                <div
                    className={`flex items-center gap-3 p-4 cursor-pointer ${
                        isActive("/content-managemen", true) &&
                        "bg-gray-200 rounded-lg transition-colors"
                    }`}
                    onClick={() =>
                        setShowOptionsContentManagement(
                            !isShowOptionsContentManagement
                        )
                    }
                >
                    <BiBookContent />
                    Gestión de contenido
                    {isShowOptionsContentManagement ? (
                        <RiArrowUpSLine className="transition-transform transform rotate-180" />
                    ) : (
                        <RiArrowRightSLine className="transition-transform transform rotate-0" />
                    )}
                </div>
                <CSSTransition
                    in={isShowOptionsContentManagement}
                    timeout={300}
                    classNames="options"
                    unmountOnExit
                >
                    <ShowOptions
                        isActive={isActive}
                    />
                </CSSTransition>
            </li>
        </>
    );
};

export default Links;