import { useContext } from "react";
import { FilesManagerContext } from "../..";
import { toast } from 'sonner'
import { Tooltip } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdLink } from "react-icons/io";

const Options = () => {
    const { selectedKeys, files, handleDelete} = useContext(FilesManagerContext);
    const handleCopyLink = async () => {
        const selectedKeysArray = Array.from(selectedKeys)
        const selectedUrl = files.filter((file, index) => file.file.id === selectedKeysArray[index]).map((file) => file.file.url)
        try{
            await navigator.clipboard.writeText(selectedUrl)
            toast.success('Se copió el enlace')
        } catch(error){
            toast.warning('No se pudo copiar el enlace')
        }
    }
    return (
        <>
            <div className="flex items-center gap-2 text-gray-500">
                <Tooltip content="Borrar">
                    <span className="text-lg cursor-pointer active:opacity-50" onClick={() => handleDelete(selectedKeys)}>
                        <MdOutlineDeleteOutline />
                    </span>
                </Tooltip>
                <Tooltip content="Copiar vinculos">
                    <span className="text-lg text-gray-500 cursor-pointer active:opacity-50" onClick={handleCopyLink}>
                        <IoMdLink/>
                    </span>
                </Tooltip>
            </div>
        </>
    )
}

export default Options