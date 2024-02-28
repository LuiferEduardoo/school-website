import { toast } from 'sonner'
import { Tooltip } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdLink } from "react-icons/io";

const Options = (props) => {
    const handleCopyLink = async () => {
        const selectedKeys = Array.from(props.selectedKeys)
        const selectedUrl = props.files.filter((file, index) => file.id === selectedKeys[index]).map((file) => file.file.url)
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
                    <span className="text-lg cursor-pointer active:opacity-50" onClick={props.handleDelete}>
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