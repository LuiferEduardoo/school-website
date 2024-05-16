import React, { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { Input, Checkbox, useDisclosure } from "@nextui-org/react";
import ModalEdit from "./ModalEdit";


const DetailsContent = (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [value, setValue] = useState(props.data?.elementValue);

    useEffect(() => {
        setValue(props.data?.elementValue)
    }, [props.data?.id]);

    const nameElement = props.data?.nameElement;

    return (
        <div className={`flex p-2 ${props.styleComponent} gap-4`}>
            <div>
                <span className='text-xl'>{props.icon}</span>
            </div>
            <div className="flex gap-3">
                {props.children}
            </div>
            {
                props.edit && (
                    <>
                        <div className="flex ml-auto">
                            <span className='text-xl cursor-pointer' onClick={onOpen}>
                                <BiEditAlt />
                            </span>
                        </div>
                    <ModalEdit 
                        isOpen={isOpen} 
                        onClose={onClose}
                        id={props.data?.id}
                        value={value}
                        inicialValue={props.data?.elementValue}
                        nameField={props.data?.nameField}
                    >
                        <section className='flex flex-col'>
                            {nameElement !== 'Privacidad' ? (
                                <>
                                    <Input 
                                        type="text" 
                                        label={nameElement} 
                                        value={value}
                                        onValueChange={setValue}
                                    />
                                </>
                            ) : (
                                <>
                                    <Checkbox 
                                        isSelected={value}
                                        onValueChange={setValue}
                                        color="primary" 
                                        size="sm" 
                                        radius="full" 
                                    > 
                                        Publico 
                                    </Checkbox>
                                    <Checkbox 
                                        isSelected={!value} 
                                        onValueChange={() => setValue(false)}
                                        color="default"
                                        size="sm" 
                                        radius="full"
                                    >
                                        Privado
                                    </Checkbox>
                                </>
                            ) }
                        </section>
                    </ModalEdit>
                    </>
                )
            }
        </div>
    )
}

export default DetailsContent