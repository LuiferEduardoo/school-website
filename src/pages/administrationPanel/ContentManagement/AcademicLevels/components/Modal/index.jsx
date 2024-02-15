import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

const ModalComponent = (prosp) => {
    const header = `${prosp.elementEdit ? 'Editar' : 'Crear'} ${prosp.elementName}`
    return (
        <>
            <Modal 
                size='5xl' 
                scrollBehavior='inside'
                isOpen={prosp.isOpen} 
                onClose={prosp.onClose} 
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
                    <ModalBody>
                        {prosp.children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                        </Button>
                        <Button color="primary" onPress={prosp.handleAction}>
                        {prosp.elementEdit ? 'Editar' : 'Crear'}
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalComponent