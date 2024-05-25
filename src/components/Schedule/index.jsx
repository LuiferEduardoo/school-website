import { useState, createContext } from "react";
import Header from "./Header"
import ScheduleComponent from "./ScheduleComponent"
import ModalContainer from "./ModalContainer";
import { useDisclosure } from "@nextui-org/react";

export const ScheduleContext = createContext();

const Schedule = (props) => {
    const [academicLevel, setAcademicLevel] = useState(new Set());
    const [course, setCourse] = useState(new Set());
    const [clickButton, setClickButton] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [select, setSelect] = useState('');
    const [idScheduleSelect, setIdScheduleSelect] = useState();
    const [updatePageSchedule, setUpdatePageSchedule] = useState(false)

    return (
        <ScheduleContext.Provider value={{
            academicLevel: academicLevel,
            setAcademicLevel: setAcademicLevel,
            course: course,
            setCourse: setCourse,
            clickButton: clickButton,
            setClickButton: setClickButton,
            select: select,
            setSelect: setSelect,
            idScheduleSelect: idScheduleSelect,
            setIdScheduleSelect: setIdScheduleSelect,
            isOpen: isOpen,
            onOpen: onOpen,
            onClose: onClose,
            isReadOnly: props.isReadOnly,
            withoutToken: props.withoutToken,
            updatePageSchedule: updatePageSchedule,
            setUpdatePageSchedule: setUpdatePageSchedule
            }}
        >
            <Header />
            <ScheduleComponent />
            <ModalContainer />
        </ScheduleContext.Provider>
    )
}

export default Schedule