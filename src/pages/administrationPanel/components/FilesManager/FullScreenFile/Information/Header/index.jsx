import { MdOutlineClose } from "react-icons/md";

const Header = (props) => {
    return (
        <header className="flex items-center border-b-1 border-gray-300 mb-5 pb-4">
            <span className="p-2 active:opacity-50 hover:bg-gray-200 rounded-full text-lg cursor-pointer" onClick={ ()=> props.setShowInformation(false)}><MdOutlineClose /></span>
            <span className="text-xl font-semibold">Información</span>
        </header>
    )
}

export default Header