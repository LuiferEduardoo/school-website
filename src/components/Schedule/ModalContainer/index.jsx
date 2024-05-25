import { useState, useEffect, useContext } from "react";
import { ScheduleContext } from "..";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import Subject from "./Subject";
import Events from "./Events";

const ModalContainer = () => {
    const {isOpen, onOpen, onClose, clickButton, academicLevel} = useContext(ScheduleContext);

    return (
        <>
            <Modal
                size={clickButton === 'subject' ? 'full' : 'sm'} 
                isDismissable={false}
                isOpen={isOpen} 
                onOpen={onOpen}
                onClose={onClose}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{clickButton === 'event' ? 'Evento horario' : 'Asignatura'}</ModalHeader>
                    <ModalBody>
                        {clickButton === 'event' ? (
                            <Events />
                        ) : (
                            <Subject 
                                academicLevel={academicLevel}
                            />
                        )}
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalContainer