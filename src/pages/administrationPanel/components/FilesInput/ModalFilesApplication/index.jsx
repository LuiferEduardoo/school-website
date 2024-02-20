import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import ViewImage from './ViewImage';

const ModalFilesApplication = ({isOpen, onClose, haveManyFiles, setFiles}) => {
    const [clickedImages, setClickedImages] = useState([]);
    const handleAddImages = () => {
        onClose(); 
        setFiles(clickedImages);
        setClickedImages([])
    }
    return (
        <Modal 
                size="5xl" 
                isOpen={isOpen} 
                onClose={onClose} 
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Agregar imagen</ModalHeader>
                            <ModalBody>
                                <ViewImage clickedImages={clickedImages} setClickedImages={setClickedImages} haveManyFiles={haveManyFiles} isOpen={isOpen}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                                </Button>
                                <Button color="primary" onPress={handleAddImages}>
                                Agregar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
        </Modal>
    );
}

export {ModalFilesApplication, ViewImage}