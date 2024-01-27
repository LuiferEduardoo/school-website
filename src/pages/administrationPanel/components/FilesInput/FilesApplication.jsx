import React, { useState } from 'react';
import { FcAddImage } from "react-icons/fc";
import { Button, Modal } from 'flowbite-react';
import PreViewFiles from './PreViewFiles'
import { Callout } from "@tremor/react";
import images from './../../../../services/images.service'


const FilesApplication = ({typeFile, haveManyFiles, files, setFiles}) => {
    const [openModal, setOpenModal] = useState(false);
    const [clickedImages, setClickedImages] = useState([]);

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
        <>
            <div>
                <Callout
                    title="Cargar desde aplicación"
                    color="yellow"
                >
                    Cargar los archivos por medio de la aplicación, son aquello que previamentes fueron subidos y se encuentran en nuestro sistema. 
                </Callout>
                <Button className='mt-6' color='blue' onClick={() => setOpenModal(true)}>Agregar</Button>
                <PreViewFiles  files={files} setFiles={setFiles} typeFile={typeFile}/>
            </div>
            <Modal show={openModal} size='6xl' onClose={() => setOpenModal(false)}>
                <Modal.Header>Agregar imagen</Modal.Header>
                    <Modal.Body>
                        <div className="grid grid-cols-1 gap-6 p-6 space-y-6 sm:grid-cols-4">
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
                    </Modal.Body>
                    <Modal.Footer>
                    <Button color='blue' onClick={() => {setOpenModal(false); setFiles(clickedImages)}}>Agregar</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilesApplication;
