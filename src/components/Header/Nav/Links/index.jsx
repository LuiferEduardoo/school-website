import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SubLinksOurSchool from "./SubLinksOurSchool";
import SubLinksAcademicLevels from "./SubLinksAcademicLevels";
import { CSSTransition } from "react-transition-group";
import Buttons from "../../HeaderTop/Buttons";

const Links = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="flex flex-col gap-10 lg:gap-0 w-full lg:w-auto h-full">
            <ul className="flex flex-col lg:flex-row lg:gap-4 text-white  h-auto lg:h-full w-full lg:w-auto">
                <li className="lg:h-full">
                    <Link
                        to=""
                        className={`${
                            location.pathname === "/" ? "bg-blue-800" : ""
                        } flex items-center h-full p-3 rounded`}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="lg:h-full w-full lg:w-auto relative group">
                    <button
                        onClick={() => handleMenuClick("nuestro-colegio")}
                        className={`${
                            isActive("/nuestro-colegio") ? "bg-blue-800" : ""
                        } flex items-center lg:h-full w-full p-3 rounded`}
                    >
                        <span className="flex items-center gap-3">
                            Nuestro colegio 
                            <IoIosArrowDown />
                        </span>
                    </button>
                    <CSSTransition
                        in={openMenu === "nuestro-colegio"}
                        timeout={300}
                        classNames="options"
                        unmountOnExit
                    >
                        <ul className="lg:hidden px-6">
                            <SubLinksOurSchool />
                        </ul>
                    </CSSTransition>
                    <ul className="w-full hidden lg:group-hover:block absolute left-0 bg-blue-600 rounded shadow-lg">
                        <SubLinksOurSchool />
                    </ul>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/proyectos-institucionales"
                        className={`${
                            isActive("/proyectos-institucionales")
                                ? "bg-blue-800"
                                : ""
                        } flex items-center h-full p-3 rounded`}
                    >
                        Proyectos Institucionales
                    </Link>
                </li>
                <li className="lg:h-full w-full lg:w-auto relative group">
                    <button
                        onClick={() => handleMenuClick("niveles-academicos")}
                        className={`${
                            isActive("/niveles-academicos") ? "bg-blue-800" : ""
                        } flex items-center lg:h-full w-full p-3 rounded`}
                    >
                        <span className="flex items-center gap-3">
                            Niveles Academicos
                            <IoIosArrowDown />
                        </span>
                    </button>
                    <CSSTransition
                        in={openMenu === "niveles-academicos"}
                        timeout={300}
                        classNames="options"
                        unmountOnExit
                    >
                        <ul className="lg:hidden px-6">
                            <SubLinksAcademicLevels />
                        </ul>
                    </CSSTransition>
                    <ul className="w-full hidden lg:group-hover:block absolute left-0 bg-blue-600 rounded shadow-lg">
                        <SubLinksAcademicLevels />
                    </ul>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/admisiones"
                        className={`${
                            isActive("/admisiones") ? "bg-blue-800" : ""
                        } flex items-center h-full p-3 rounded`}
                    >
                        Admisiones
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/noticias"
                        className={`${
                            isActive("/noticias") ? "bg-blue-800" : ""
                        } flex items-center h-full p-3 rounded`}
                    >
                        Noticias
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/contacto"
                        className={`${
                            isActive("/contacto") ? "bg-blue-800" : ""
                        } flex items-center h-full p-3 rounded`}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
            <div className="lg:hidden px-2 py-2">
                <Buttons />
            </div>
        </div>
    );
};

export default Links;