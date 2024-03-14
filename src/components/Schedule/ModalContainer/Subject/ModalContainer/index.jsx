import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Form from "./Form";

const ModalContainer = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <Modal 
            isOpen={props.isOpen} 
            onClose={props.onClose} 
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">{`${props.isEdit ? 'Editar' : 'Crear'} asignatura`}</ModalHeader>
                <ModalBody>
                    <Form 
                        setIsDisabled={setIsDisabled}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                    </Button>
                    {props.isEdit && (
                        <Button color="danger" variant="flat">
                            Borrar
                        </Button>
                    )}
                    <Button color="primary" onPress={onClose} isDisabled={isDisabled}>
                        Guardar
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}

export default ModalContainer