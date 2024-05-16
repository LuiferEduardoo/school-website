import React,{ useEffect, useContext, useState } from "react";
import { FilesManagerContext } from "../../..";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import { updateFiles } from "../../../../../../../services/files.service";
import { toast } from "sonner";

const ModalEdit = (props) => {

    const [isLoading, setIsLoading] = useState(false)

    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const {setUpdatePage} = useContext(FilesManagerContext);

    const [valuesAreTheSame, setValuesAreTheSame] = useState(true);

    useEffect(() => {
        if (props.value === props.inicialValue) {
            setValuesAreTheSame(true)
        } else {
            setValuesAreTheSame(false)
        }
    }, [props.value, props.inicialValue]);

    const handleEdit = async () => {
        try{
            setIsLoading(true);
            await updateFiles(accessToken, setAccessToken, refreshToken, setRefreshToken, props.id, {
                [props.nameField]: props.value
            });
            toast.success('File actualizado con exito');
            setUpdatePage(true);
        } catch(eror) {
            toast.warning('Error al actualizar el file')
        } finally {
            setIsLoading(false)
        }
    }
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
                        <Button 
                            isLoading={isLoading}
                            color="primary" 
                            isDisabled={valuesAreTheSame} 
                            onPress={handleEdit}
                        >
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