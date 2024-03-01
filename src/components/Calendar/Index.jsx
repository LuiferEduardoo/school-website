import React, {useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useDisclosure } from "@nextui-org/react";
import ModalContainer from './ModalContainer';

const localizer = momentLocalizer(moment)


const CalendarComponent = () => {
    const [select, setSelect] = useState('');
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleSelected = slotInfo => {
        onOpen();
        setSelect(slotInfo);
    };
    return (
        <div className="h-full w-full">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelected}
            />
            <ModalContainer 
                isOpen={isOpen}
                onClose={onClose}
                select={select}
            />
        </div>
    )
}

export default CalendarComponent