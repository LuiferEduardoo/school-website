import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";


const ModalComponent = ({isOpen, onClose, setSelectedKeys, nameElement, handleDelete }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">Eliminar {nameElement} </ModalHeader>
                    <ModalBody>
                        <p> 
                            Estás seguro que deseas eliminar el o los {nameElement}.
                        </p>
                        <p>
                            Recuerda que si el elemento está asociado a otro, no lo podrás eliminarlo. 
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Cancelar
                        </Button>
                        <Button color="primary" onPress={() => {handleDelete()}}>
                        Eliminar
                        </Button>
                    </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent