import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex flex-col space-y-2">

            <h2 className="text-xl font-semibold text-white">Páginas principales</h2>
            
            <ul className="flex flex-col space-y-2 text-white">
                <li>
                    <Link
                        to=""
                        className="hover:text-gray-400"
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/nuestro-colegio"
                        className="hover:text-gray-400"
                    >
                        Nuestro colegio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/proyectos-institucionales"
                        className="hover:text-gray-400"
                    >
                        Proyectos Institucionales
                    </Link>
                </li>
                <li>
                    <Link
                        to="/niveles-academicos"
                        className="hover:text-gray-400"
                    >
                        Niveles Académicos
                    </Link>
                </li>
                <li >
                    <Link
                        to="/admisiones"
                        className="hover:text-gray-400"
                    >
                        Admisiones
                    </Link>
                </li>
                <li>
                    <Link
                        to="/noticias"
                        className="hover:text-gray-400"
                    >
                        Noticias
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contacto"
                        className="hover:text-gray-400"
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav