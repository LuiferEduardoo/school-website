import { useContext } from "react";
import { ScheduleContext } from "../../..";
import Subject from "../../../../../pages/administrationPanel/ContentManagement/AcademicLevels/components/Form/Subject";
import {Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

const ModalContainer = (props) => {
    const {academicLevel} = useContext(ScheduleContext);

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
                    <Subject 
                        elementEdit={props.isEdit}
                        onClose={onClose}
                        academicId={[...academicLevel][0]}
                        setUpdatePage={props.setUpdatepage}
                        teachers={props.teachers}
                    />
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}

export default ModalContainer