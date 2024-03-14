import React, { useState } from 'react';
import {useDisclosure} from "@nextui-org/react";
import View from "../../../../pages/administrationPanel/components/View";
import { rows, columns, optionsFilter } from './data'
import ModalContainer from './ModalContainer';

const Subject = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [isAllSelect, setAllSelect] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleCreate = () => {
        onOpen();
        setIsEdit(false)
    }

    const handleEdit= () => {
        onOpen();
        setIsEdit(true)
    }

    return (
        <>
            <View 
                optionsFilter={optionsFilter} 
                setAllSelect={setAllSelect} 
                rows={rows} 
                columns={columns} 
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys} 
                isAllSelect={isAllSelect} 
                nameElement='Asignatura'
                handleCreate={handleCreate} 
                handleEdit={handleEdit} 
            />
            <ModalContainer 
                isEdit={isEdit}
                isOpen={isOpen} 
                onClose={onClose} 
            />
        </>
    );
}

export default Subject