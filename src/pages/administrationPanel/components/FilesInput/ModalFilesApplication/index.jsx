import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import ViewImage from './ViewImage';

const ModalFilesApplication = (props) => {
    const [clickedImages, setClickedImages] = useState([]);
    const handleAddImages = () => {
        props.onClose(); 
        props.setFiles(clickedImages);
        if(!props.haveManyFiles && props.existingFiles?.[0]?.id){
            props.setIdEliminateExistingFiles([props.existingFiles[0].id]);
        }
        setClickedImages([])
    }
    return (
        <Modal 
                size="5xl" 
                isOpen={props.isOpen} 
                onClose={props.onClose} 
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Agregar imagen</ModalHeader>
                            <ModalBody>
                                <ViewImage 
                                    clickedImages={clickedImages} 
                                    setClickedImages={setClickedImages} 
                                    fileSize={props.fileSize}
                                    haveManyFiles={props.haveManyFiles} 
                                    isOpen={props.isOpen}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                                </Button>
                                <Button 
                                    color="primary" 
                                    onPress={handleAddImages}
                                    isDisabled={clickedImages.length === 0}
                                >
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