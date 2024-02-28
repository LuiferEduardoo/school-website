import React,{ useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

const ModalEdit = (props) => {
    const [valuesAreTheSame, setValuesAreTheSame] = useState(true);

    useEffect(() => {
        if (props.value === props.inicialValue) {
            setValuesAreTheSame(true)
        } else {
            setValuesAreTheSame(false)
        }
    }, [props.value, props.inicialValue]);
    return(
        <>
            <Modal 
                size='4xl'
                isOpen={props.isOpen} 
                onClose={props.onClose} 
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Editar</ModalHeader>
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Cancelar
                        </Button>
                        <Button color="primary" isDisabled={valuesAreTheSame} onPress={() => props.handleEdit}>
                        Guardar
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalEdit