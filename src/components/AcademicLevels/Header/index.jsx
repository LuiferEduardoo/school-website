import { useContext } from "react";
import { AcademicLevelsContext } from "..";

const Header = () => {
    const {nameLevel, levelCode} = useContext(AcademicLevelsContext);
    return (
        <header className="px-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{nameLevel}</h1>
            <p className="text-gray-600">Codigo: {levelCode}</p>
        </header>
    )
}

export default Header