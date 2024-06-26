import { Link, useLocation } from "react-router-dom";

const SubLinksAcademicLevels = () => {
    const location = useLocation();

    return (
        <>
            <Link
                to="/niveles-academicos"
                className={`${
                    location.pathname === "/niveles-academicos"
                        ? "text-gray-200"
                        : ""
                } flex items-center h-full p-3 rounded`}
            >
                Niveles Academicos
            </Link>
            <Link
                to="/niveles-academicos/horario"
                className={`${
                    location.pathname === "/niveles-academicos/horario"
                        ? "text-gray-200"
                        : ""
                } flex items-center h-full p-3 rounded`}
            >
                Horario
            </Link>
        </>
    )
}

export default SubLinksAcademicLevels