import React, { useState } from "react";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, Input, Textarea, Button } from "@nextui-org/react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';

const ModalContainer = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState(moment(props.select.start).format());
    const [end, setEnd] = useState(moment(props.select.end));S
    
    return (
        <>
            <Modal 
                isOpen={props.isOpen} 
                onClose={props.onClose}
                isDismissable={false}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Evento</ModalHeader>
                    <ModalBody>
                        <Input 
                            isRequired
                            type="text" 
                            label="Titulo" 
                            variant="underlined" 
                            value={title}
                            onValueChange={setTitle}
                        />
                        <Textarea
                            label="Descripción"
                            variant="bordered"
                            labelPlacement="outside"
                            placeholder="Introduce tu descripción"
                            value={description}
                            onValueChange={setDescription}
                        />
                        <LocalizationProvider dateAdapter={AdapterMoment} className="flex flex-col">
                            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                <DateTimePicker 
                                    label="Inicio *" 
                                    value={start}
                                    onChange={(newValue) => setStart(newValue)}
                                />
                                <DateTimePicker 
                                    label="Finalización *"
                                    value={end}
                                    onChange={(newValue) => setEnd(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                        </Button>
                        <Button color="primary" onPress={onClose}>
                        Guardar
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalContainer