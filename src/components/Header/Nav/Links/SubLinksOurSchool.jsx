import { Link, useLocation } from "react-router-dom";

const SubLinksOurSchool = () => {
    const location = useLocation();

    return (
        <>
            <Link
                to="/nuestro-colegio"
                className={`${
                    location.pathname === "/nuestro-colegio"
                        ? "text-gray-200"
                        : ""
                } flex items-center h-full p-3 rounded`}
            >
                Nosotros
            </Link>
            <Link
                to="/nuestro-colegio/calendario"
                className={`${
                    location.pathname === "/nuestro-colegio/calendario"
                        ? "text-gray-200"
                        : ""
                } flex items-center h-full p-3 rounded`}
            >
                Calendario
            </Link>
        </>
    );
};

export default SubLinksOurSchool;