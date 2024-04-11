import React, {useContext} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { ViewContext } from "..";


const ModalComponent = ({elimintateId}) => {
    const { isOpen, onClose, setSelectedKeys, nameElement, handleDelete } = useContext(ViewContext);
    const handleAction = () => {
        handleDelete(elimintateId) 
        onClose();
    }
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
                        <Button color="primary" onPress={handleAction}>
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