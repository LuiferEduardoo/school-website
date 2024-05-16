import { MdPrivacyTip } from "react-icons/md";
import { FaCalendarAlt, FaImage, FaFile, FaFolder, FaUser  } from "react-icons/fa";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import {User } from "@nextui-org/react";
import removeExtension from "../../../../../../../utils/removeExtension";
import convertDate from "./convertDate";
import FileIcons from "./../../../../FileIcons"

export default function (file, fileType) {
    const formatName = (name) => {
        let maxLength = 15;
        if (name.length > maxLength) {
            let partLength = Math.floor(maxLength / 2);
            return `${name.slice(0, partLength)}...${name.slice(-partLength)}`;
        }
        return name;
    };

    const routeToModific = (routeParameter) => {
        const route = routeParameter.match(/\/uploads\/(.+?)(?:\/\d+)+\/\d+$/)[1];
        const parts = route.split("/");
        parts.shift();

        return parts.join("/")
    }
    const elements = [
        {
            icon: <FaCalendarAlt />,
            styleComponent: 'items-center',
            children: <>
                <div className='flex flex-col'>
                    <span className="font-medium text-base">Subido</span>
                    <span className="text-xs">{convertDate(file.file.createdAt)}</span>
                </div>
                {convertDate(file.file.createdAt) !== convertDate(file.file.updatedAt) && (
                    <div className='flex flex-col'>
                        <span className="font-medium text-base">Actualizado</span>
                        <span className="text-xs">{convertDate(file.file.updatedAt)}</span>
                    </div>
                )}
            </>
        },
        {
            icon: <FileIcons extension={file.file.ext} color='text-gray-500'/>,
            children: <span>{formatName(file.file.name)}</span>,
            edit: true,
            data: {
                id: file.file.id,
                nameElement: 'Nombre',
                nameField: 'newName',
                elementValue: removeExtension(file.file.name),
            }
        },
        {
            icon: <FaFolder />,
            children: <span>{file.file.folder.match(/\/uploads\/(.+?)(?:\/\d+)+\/\d+$/)[1]}</span>,
            edit: true,
            data: {
                id: file.file.id,
                nameElement: 'Folder',
                nameField: 'newFolder',
                elementValue: routeToModific(file.file.folder),
            }
        },
        {
            icon: <MdPrivacyTip />,
            children: <span className="font-medium text-base">{file.file.isPublic ? 'Publica' : 'Privada'}</span>,
            edit: true,
            data: {
                id: file.file.id,
                nameElement: 'Privacidad',
                nameField: 'isPublic',
                elementValue: file.file.isPublic,
            }
        },
        {
            icon: <FaUser />,
            children: <>
                <div className='flex flex-col gap-4'>
                    <span className="font-medium text-base">Propietario</span>
                    <User   
                        name={`${file.file.user.name} ${file.file.user.lastName}`}
                        description={file.file.user.rol[0].rol}
                        avatarProps={{
                            src: file.file.user.image[0]?.image?.file?.url
                        }}
                    />
                </div>
            </>
        }
    ];

    if (fileType === 'image') {
        elements.splice(3, 0, {
            icon: <BiSolidCreditCardAlt />,
            children: <>
                <div className='flex flex-col'>
                    <span className="font-medium text-base">Creditos imagen</span>
                    <span className="text-xs">{file.imageCredits}</span>
                </div>
            </>,
            edit: true,
            data: {
                id: file.file.id,
                nameElement: 'Credito de imagen',
                nameField: 'imageCredits',
                elementValue: file.imageCredits,
            }
        });
    }

    return elements;
}
