import React, { useState, useRef } from 'react';
import { toast } from 'sonner'
import { ModalFilesApplication } from '../../../FilesInput/ModalFilesApplication';
import { FiUpload } from "react-icons/fi";
import { MdOutlineImportantDevices, MdOutlineSettingsSystemDaydream  } from "react-icons/md";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, useDisclosure} from "@nextui-org/react";


const FilesUpload = (props) => {
    const inputFileRef = useRef(null);
    const [filesApplication, setFilesApplication] = useState([])
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleUploadFileDevices = () => {
        inputFileRef.current.click();
    };

    const handleFileSelected = (event) => {
        const files = Array.from(event.target.files); // Convertir FileList a una matriz
        if (props.fileSize) {
            files.forEach(file => {
                const img = new Image();
                img.onload = () => {
                    if (img.width < props.fileSize.width || img.height < props.fileSize.height) {
                        toast.warning(`La imagen debe tener un tamaño mínimo de ${props.fileSize.width}x${props.fileSize.height} píxeles.`);
                    }
                };
                img.src = URL.createObjectURL(file);
            });
        }
    };
    

    return (
        <section className='flex ml-auto'>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="success" variant="faded"><FiUpload/> Subir</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="devices"><span className="flex gap-2 items-center" onClick={handleUploadFileDevices}><MdOutlineImportantDevices /> Dispositivo</span> </DropdownItem>
                    {props.otherElement &&
                        <DropdownItem key="application"><span className="flex gap-2 items-center" onClick={onOpen} ><MdOutlineSettingsSystemDaydream /> Aplicación</span></DropdownItem>
                    }
                </DropdownMenu>
            </Dropdown>
            <input
                type="file"
                ref={inputFileRef}
                style={{ display: 'none' }}
                onChange={handleFileSelected}
                accept={`${props.acceptFiles}/*`}
                multiple
            />
            <ModalFilesApplication 
                isOpen={isOpen} 
                onClose={onClose} 
                haveManyFiles={true} 
                fileSize={props.fileSize}
                setFiles={setFilesApplication}
            />
        </section>
    )
}

export default FilesUpload