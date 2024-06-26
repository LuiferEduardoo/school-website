import Logo from "./Logo";
import Buttons from "./Buttons";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { HeaderContext } from "..";
import { useContext } from "react";

const HeaderTop = () => {
    const {toggleMenu, isMenuOpen} = useContext(HeaderContext)
    return (
        <section className="flex justify-between items-center w-full h-auto py-3 bg-white px-4">
            <Logo />
            <div className="hidden lg:flex flex-col lg:ml-4">
                <Buttons />
            </div>
            <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <IoClose />
                ) : (
                    <IoMenuSharp/>
                )}
            </button>
        </section>
    );
}

export default HeaderTop;