import React, {useState, createContext} from 'react';
import { useDisclosure } from "@nextui-org/react";
import ModalContainer from './ModalContainer';
import CalendarComponent from './CalendarComponent';
import ButtonAdd from './ButtonAdd';

export const CalendarContext = createContext();

const Calendar = (props) => {
    const [select, setSelect] = useState('');
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [idSelectEvent, setIdSelectEvent] = useState();
    const [isUpdatePageCalendar, setIsUpdatePageCalendar] = useState(false);
    const [selectCalendar, setSelectCalendar] = useState();
    const [isDisable, setIsDisabled] = useState(true);

    return (
        <CalendarContext.Provider value={{
            select: select,
            setSelect: setSelect,
            isOpen: isOpen,
            onOpen: onOpen,
            onClose: onClose,
            idSelectEvent: idSelectEvent,
            setIdSelectEvent: setIdSelectEvent,
            isUpdatePageCalendar: isUpdatePageCalendar,
            setIsUpdatePageCalendar: setIsUpdatePageCalendar,
            selectCalendar: selectCalendar,
            setSelectCalendar: setSelectCalendar,
            isDisable: isDisable,
            setIsDisabled: setIsDisabled,
            isReadOnly: props.isReadOnly,
            withoutToken: props.withoutToken,
        }}>
            <div className="h-full w-full flex flex-col gap-2">
                <ButtonAdd />
                <CalendarComponent />
                <ModalContainer />
            </div>
        </CalendarContext.Provider>
    )
}

export default Calendar