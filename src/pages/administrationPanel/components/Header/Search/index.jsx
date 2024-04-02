import { RiSearchLine } from "react-icons/ri";
import {useDisclosure} from "@nextui-org/react";
import ModalComponent from "./ModalComponent"

const Search = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    
    const handleClick = () => {
        onOpen()
    }
    return (
        <>
            <form className="w-full md:[40%] lg:w-[20%] md:-order-none">
                <div className="relative">
                    <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
                    <input
                        type="text"
                        className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
                        placeholder="Buscar"
                        onClick={handleClick}
                        readOnly // Esto evita que se pueda editar el input
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </form>
            <ModalComponent 
                isOpen={isOpen} 
                onClose={onClose}
            />
        </>
    );
}

export default Search