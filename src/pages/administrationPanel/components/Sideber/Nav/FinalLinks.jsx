import { Link } from "react-router-dom";
import { RiFileCloudLine } from "react-icons/ri";

const FinalLinks = ({ isActive }) => {
    return (
        <>
            <li>
                <Link
                    to="files-management"
                    className={`flex items-center gap-3 p-4 ${
                        isActive("/files-management", true) &&
                        "bg-gray-200 rounded-lg transition-colors"
                    }`}
                >
                    <RiFileCloudLine />
                    Gestión de archivos
                </Link>
            </li>
        </>
    );
};

export default FinalLinks;
