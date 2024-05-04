import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";

const ModalComponent = (prosp) => {
    const header = `${prosp.elementEdit ? 'Editar' : 'Crear'} usuarios`
    return (
        <>
            <Modal 
                size='xl'
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
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalComponent