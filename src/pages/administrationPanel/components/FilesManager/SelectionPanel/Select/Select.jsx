import { useContext } from "react";
import { FilesManagerContext } from "../..";
import { Tooltip } from "@nextui-org/react";
import { MdOutlineClose } from "react-icons/md";

const Select = (props) => {
    const { selectedKeys, setSelectedKeys } = useContext(FilesManagerContext);
    const numberElement = selectedKeys.size;

    const selectNone = () => {
        setSelectedKeys(new Set([]))
    }
    return (
        <>
            <div className="flex items-center gap-2 text-gray-500">
                <Tooltip content="Borrar selección">
                    <span className="cursor-pointer active:opacity-50" onClick={selectNone}>
                        <MdOutlineClose />
                    </span>
                </Tooltip>
                <span>{numberElement} seleccionados</span>
            </div>
        </>
    )
}

export default Select