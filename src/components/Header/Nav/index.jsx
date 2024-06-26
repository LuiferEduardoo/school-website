import { useContext, useRef } from "react";
import Links from "./Links";
import { HeaderContext } from "..";

const Nav = (props) => {
    const {isMenuOpen } = useContext(HeaderContext);

    return (
        <nav 
            className={`fixed right-0 w-full h-full bg-blue-600 flex flex-col items-center justify-center transform ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-[180%]'
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:h-14 lg:flex-row lg:justify-center lg:bg-blue-600 lg:flex`}
        >
            <Links />
        </nav>
    )
}

export default Nav;