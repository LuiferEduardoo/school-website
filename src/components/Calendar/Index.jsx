import React, {useState} from 'react';
import { useDisclosure } from "@nextui-org/react";
import ModalContainer from './ModalContainer';
import CalendarComponent from './CalendarComponent';
import ButtonAdd from './ButtonAdd'


const Calendar = (props) => {
    const [select, setSelect] = useState('');
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <div className="h-full w-full flex flex-col gap-2">
            {!props.isReadOnly && (
                <ButtonAdd 
                    onOpen={onOpen}
                />
            )}
            <CalendarComponent 
                isReadOnly={props.isReadOnly}
                onOpen={onOpen}
                setSelect={setSelect}
            />
            <ModalContainer 
                isReadOnly={props.isReadOnly}
                isOpen={isOpen}
                onClose={onClose}
                select={select}
            />
        </div>
    )
}

export default Calendar