import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@nextui-org/react";
import Form from "./Form";

const FormAdmissionRequest = (props) => {
    return (
        <div className="formAdmissionRequest">
            <Modal 
                size="full" 
                isOpen={props.isOpen} 
                onClose={props.onClose} 
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Formulario solicitud de admisión
                            </ModalHeader>
                            <ModalBody>
                                <Form 
                                    onOpen={props.onOpen} 
                                    onClose={props.onClose} 
                                />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default FormAdmissionRequest