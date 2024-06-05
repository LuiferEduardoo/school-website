import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HeaderContext } from "..";
import { useContext } from "react";
import Buttons from "../HeaderTop/Buttons";

const Links = () => {
    const {setIsMenuOpen} = useContext(HeaderContext);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    }

    return (
        <div className="flex flex-col gap-10 w-full lg:w-auto h-full">
            <div className="flex lg:hidden p-2 ml-auto">
                <IoClose className="text-2xl text-white cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>
            <ul className="flex flex-col lg:flex-row lg:gap-4 text-white  h-full w-full lg:w-auto">
                <li className="lg:h-full">
                    <Link
                        to=""
                        className={`${location.pathname === "/" ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/nuestro-colegio"
                        className={`${isActive("/nuestro-colegio") ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Nuestro colegio
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/proyectos-institucionales"
                        className={`${isActive("/proyectos-institucionales")  ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Proyectos Institucionales
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/niveles-academicos"
                        className={`${isActive("/niveles-academicos") ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Niveles Académicos
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/admisiones"
                        className={`${isActive("/admisiones") ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Admisiones
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/noticias"
                        className={`${isActive("/noticias") ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Noticias
                    </Link>
                </li>
                <li className="lg:h-full">
                    <Link
                        to="/contacto"
                        className={`${isActive("/contacto") ? "bg-blue-800" : ""} flex items-center h-full p-3 rounded`}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
            <div className="lg:hidden px-2 py-2">
                <Buttons />
            </div>
        </div>
    )
}

export default Links;