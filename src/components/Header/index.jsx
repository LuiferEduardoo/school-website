import React, { useState, createContext } from "react";
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";

export const HeaderContext = createContext();

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContext.Provider value={{
            toggleMenu: toggleMenu,
            isMenuOpen: isMenuOpen,
            setIsMenuOpen: setIsMenuOpen
        }}>
            <header className="fixed top-0 w-full h-auto shadow-md z-50 bg-white">
                <HeaderTop />
                <Nav />
            </header>
        </HeaderContext.Provider>
    )
}

export default Header;