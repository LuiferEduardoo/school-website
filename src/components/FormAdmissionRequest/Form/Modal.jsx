import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@nextui-org/react";

const ModalComponent = (props) => {
    const selectAcademicLevel = props.selectAcademicLevel
    return (
        <Modal
            size="2xl"
            isOpen={props.isOpen}
            onClose={props.onClose}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            hideCloseButton
            scrollBehavior="inside"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {props.title}
                        </ModalHeader>
                        <ModalBody>
                            {props.children}
                        </ModalBody>
                        <ModalFooter>
                            {props.continue && (
                                <Button
                                    color="primary"
                                    isDisabled={!props.isDisable}
                                    onPress={onClose}
                                >
                                    Continuar
                                </Button>
                            )}
                            {props.close && (
                                <Button color="danger" variant="light" onPress={props.handleClose}>
                                    Cerrar
                                </Button>
                            )}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;
