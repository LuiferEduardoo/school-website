import React, { useState, useRef, useContext } from 'react';
import { FilesManagerContext } from '../..';
import { toast } from 'sonner'
import { ModalFilesApplication } from '../../../FilesInput/ModalFilesApplication';
import { FiUpload } from "react-icons/fi";
import { MdOutlineImportantDevices, MdOutlineSettingsSystemDaydream  } from "react-icons/md";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, useDisclosure} from "@nextui-org/react";


const FilesUpload = (props) => {
    const {fileSize, setFiles, otherElement, acceptFiles, setFilesApplication} = useContext(FilesManagerContext);
    const inputFileRef = useRef(null);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleUploadFileDevices = () => {
        inputFileRef.current.click();
    };

    const handleFileSelected = (event) => {
        const files = Array.from(event.target.files); // Convertir FileList a una matriz
        if (fileSize) {
            files.forEach(file => {
                const img = new Image();
                img.onload = () => {
                    if (img.width < fileSize.width || img.height < fileSize.height) {
                        toast.warning(`La imagen debe tener un tamaño mínimo de ${fileSize.width}x${fileSize.height} píxeles.`);
                    } else{
                        setFiles(prevFiles => [...prevFiles, file]);
                    }
                };
                img.src = URL.createObjectURL(file);
            });
        } else {
            setFiles(files)
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
                    {otherElement &&
                        <DropdownItem key="application"><span className="flex gap-2 items-center" onClick={onOpen} ><MdOutlineSettingsSystemDaydream /> Aplicación</span></DropdownItem>
                    }
                </DropdownMenu>
            </Dropdown>
            <input
                type="file"
                ref={inputFileRef}
                style={{ display: 'none' }}
                onChange={handleFileSelected}
                accept={`${acceptFiles}/*`}
                multiple
            />
            <ModalFilesApplication 
                isOpen={isOpen} 
                onClose={onClose} 
                haveManyFiles={true} 
                fileSize={fileSize}
                setFiles={setFilesApplication}
            />
        </section>
    )
}

export default FilesUpload