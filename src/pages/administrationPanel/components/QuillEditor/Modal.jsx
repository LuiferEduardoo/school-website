import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab, Card, CardBody, Input} from "@nextui-org/react";
import { ViewImage } from './../FilesInput/ModalFilesApplication'


const ModalQuill = ({isOpen, onClose, handleModalClose}) => {
    const [clickedImages, setClickedImages] = useState([]);
    const [valueInput, setValueInput ] = useState('')
    const addImage = () => {
        onClose();
        handleModalClose(clickedImages[0] ? clickedImages[0].url : valueInput);
        setClickedImages([])
        setValueInput('')
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="4xl">
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Agregar imagen</ModalHeader>
                <ModalBody>
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                        <Tab key="url" title="Agregar por url">
                            <Input 
                                type='text' 
                                label='url'  
                                value={valueInput} 
                                onChange={(e) => {setValueInput(e.target.value)}}
                            /> 
                        </Tab>
                        <Tab key="application" title="Agregar por aplicación">
                            <Card>
                                <ViewImage clickedImages={clickedImages} setClickedImages={setClickedImages} haveManyFiles={false}/>
                            </Card>  
                        </Tab>
                    </Tabs>
                </div>  
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                    <Button color="primary" onPress={() => addImage()}>
                    Agregar
                    </Button>
                </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
    )
}

export default ModalQuill