import React, { useEffect, useState } from "react";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter } from "@nextui-org/react";
import { MdEventNote } from "react-icons/md";
import moment from 'moment';
import CreateOrEdit from './CreateOrEdit';
import ReadOnly from './ReadOnly';
import Footer from './Footer';

const ModalContainer = (props) => {
    const [title, setTitle] = useState(props.select.title || '');
    const [description, setDescription] = useState(props.select.description || '');
    const [start, setStart] = useState(moment(props.select.start).format('YYYY-MM-DDTHH:mm'));
    const [end, setEnd] = useState(moment(props.select.end).format('YYYY-MM-DDTHH:mm'));
    const [error, setError] = useState(false);

    useEffect(() => {
        setTitle(props.select.title || '');
        setDescription(props.select.description || '');
        setStart(moment(props.select.start).format('YYYY-MM-DDTHH:mm'));
        setEnd(moment(props.select.end).format('YYYY-MM-DDTHH:mm'));
        setError(false);
    }, [props.isOpen]);

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
                        <ModalHeader className="flex gap-1 items-center text-xl"><MdEventNote /> Evento</ModalHeader>
                        <ModalBody>
                            {props.isReadOnly ? (
                                <ReadOnly 
                                    title={title}
                                    description={description}
                                    start={start}
                                    end={end}
                                />
                            ) : (
                                <CreateOrEdit 
                                    select={props.select}
                                    setStart={setStart}
                                    setEnd={setEnd}
                                    start={start}
                                    end={end}
                                    setError={setError}
                                    title={title}
                                    setTitle={setTitle}
                                    description={description}
                                    setDescription={setDescription}
                                />
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Footer 
                                onClose={props.onClose}
                                isReadOnly={props.isReadOnly}
                                id={props.select.id}
                                title={title}
                                start={start}
                                end={end}
                                error={error}
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