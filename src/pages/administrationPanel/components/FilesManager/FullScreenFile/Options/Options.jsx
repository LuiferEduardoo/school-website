import React, {useState} from "react";
import { Tooltip } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdMore, IoIosInformationCircleOutline  } from "react-icons/io";
import MoreOptions from "./MoreOptions";

const Options = (props) => {
    const [showMoreOptions, setShowInformation] = useState(false)

    return (
        <section className="flex relative">
            {!props.otherElement && (
                <Tooltip content="Información">
                    <span className="cursor-pointer p-4 active:opacity-50 hover:bg-gray-900 rounded-full" onClick={() => props.setShowInformation(!props.showInformation)}>
                        <IoIosInformationCircleOutline />
                    </span>
                </Tooltip>
            )}
            <Tooltip content="Borrar">
                <span className="cursor-pointer p-4 active:opacity-50 hover:bg-gray-900 rounded-full" onClick={props.handleDelete}>
                    <MdOutlineDeleteOutline />
                </span>
            </Tooltip>
            <Tooltip content="Más opciones">
                <span className="cursor-pointer p-4 active:opacity-50 hover:bg-gray-900 rounded-full" onClick={() => setShowInformation(!showMoreOptions)}>
                    <IoMdMore />
                </span>
            </Tooltip>
            {
                showMoreOptions && (
                    <MoreOptions 
                        files={props.files}
                        selectedImage={props.selectedImage}
                    />
                )
            }
        </section>
    )
}

export default Options