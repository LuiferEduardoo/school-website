import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";

const contentManagementOptions = [
    {
        path: "content-management/academic-levels",
        label: "Niveles académicos",
        isProtected: true,
    },
    { path: "content-management/news", label: "Noticias", isProtected: true },
    {
        path: "content-management/institutional-projects",
        label: "Proyectos institucionales",
        isProtected: false,
    },
    { path: "content-management/banners", label: "Banners", isProtected: true },
];

const ShowOptions = ({ isActive }) => {
    const { rolUser, superAdmin } = useContext(AdministrationsPanelContext);
    return (
        <>
            <ul className="flex flex-col gap-3 pl-11 pt-2">
                {contentManagementOptions.map((option, index) =>
                    !option.isProtected ||
                    (option.isProtected && superAdmin.includes(rolUser)) ? (
                        <li key={index}>
                            <Link
                                to={option.path}
                                className={`gap-3 ${
                                    isActive(`/${option.path}`, true) &&
                                    "text-sky-700 transition-colors"
                                }`}
                            >
                                {option.label}
                            </Link>
                        </li>
                    ) : null
                )}
            </ul>
        </>
    );
};

export { ShowOptions, contentManagementOptions };
