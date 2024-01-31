import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import images from './../../../../services/images.service'

const ViewImage = ({clickedImages, setClickedImages, haveManyFiles}) => {
    const handleImageClick = (image) => {
        // Verificar si la imagen ya fue clicada
        const isImageClicked = clickedImages.some((clickedImage) => clickedImage.id === image.id);
    
        // Determinar si la imagen debe ser agregada o eliminada
        const shouldAddImage =
            (!haveManyFiles && clickedImages.length === 0) || haveManyFiles;
    
        // Actualizar el array de imágenes clicadas
        const newClickedImages = isImageClicked
            ? clickedImages.filter((clickedImage) => clickedImage.id !== image.id) // Si ya fue clicada, la eliminamos
            : shouldAddImage ? [...clickedImages, image] // Si no ha sido clicada, la agregamos
            : clickedImages; // No hacer cambios si no se permite agregar más imágenes
    
        // Actualizar el estado
        setClickedImages(newClickedImages);
    };

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-4">
            {images.map((image, index) => (
                <img
                    src={image.url}
                    alt={image.name}
                    key={image.id}
                    className={`w-full h-auto rounded cursor-pointer ${clickedImages.some((clickedImage) => clickedImage.id === image.id) ? '' : 'opacity-50'}`}
                    onClick={() => handleImageClick(image)}
                />
            ))}
        </div>
    )
}

const ModalFilesApplication = ({isOpen, onClose, haveManyFiles, setFiles}) => {
    const [clickedImages, setClickedImages] = useState([]);
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
                                <ViewImage clickedImages={clickedImages} setClickedImages={setClickedImages} haveManyFiles={haveManyFiles}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                                </Button>
                                <Button color="primary" onPress={() => {onClose(); setFiles(clickedImages)}}>
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