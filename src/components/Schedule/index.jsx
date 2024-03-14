import { useState } from "react";
import Header from "./Header"
import ScheduleComponent from "./ScheduleComponent"
import ModalContainer from "./ModalContainer";
import { useDisclosure } from "@nextui-org/react";

const Schedule = (props) => {
    const [academicLevel, setAcademicLevel] = useState("");
    const [grade, setGrade] = useState("");
    const [course, setCourse] = useState("");
    const [clickButton, setClickButton] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [select, setSelect] = useState('');

    return (
        <>
            <Header 
                academicLevel={academicLevel}
                setAcademicLevel={setAcademicLevel}
                grade={grade}
                setGrade={setGrade}
                course={course}
                setCourse={setCourse}
                setClickButton={setClickButton}
                onOpen={onOpen}
                isReadOnly={props.isReadOnly}
            />
            <ScheduleComponent 
                setSelect={setSelect}
                academicLevel={academicLevel}
                grade={grade}
                course={course}
                onOpen={onOpen}
                setClickButton={setClickButton}
                isReadOnly={props.isReadOnly}
            />
            <ModalContainer
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                clickButton={clickButton}
                academicLevel={academicLevel}
                select={select}
                isReadOnly={props.isReadOnly}
            />
        </>
    )
}

export default Schedule