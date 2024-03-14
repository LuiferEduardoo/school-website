import { useState, useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import Subject from "./Subject";
import Events from "./Events";
import Footer from "./Footer";

const ModalContainer = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <>
            <Modal
                size={props.clickButton === 'subject' ? 'full' : 'sm'} 
                isDismissable={false}
                isOpen={props.isOpen} 
                onOpen={props.onOpen}
                onClose={props.onClose}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{props.clickButton === 'event' ? 'Evento horario' : 'Asignatura'}</ModalHeader>
                    <ModalBody>
                        {props.clickButton === 'event' ? (
                            <Events 
                                academicLevel={props.academicLevel}
                                select={props.select}
                                setIsDisabled={setIsDisabled}
                                onOpen={props.onOpen}
                                isReadOnly={props.isReadOnly}
                            />
                        ) : (
                            <Subject 
                                academicLevel={props.academicLevel}
                            />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Footer 
                            clickButton={props.clickButton} 
                            onClose={onClose}
                            isDisabled={isDisabled}
                        />
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalContainer