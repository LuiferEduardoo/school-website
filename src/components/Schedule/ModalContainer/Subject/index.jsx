import React, { useState, useEffect, useContext } from 'react';
import {useDisclosure} from "@nextui-org/react";
import { toast } from 'sonner';
import { ScheduleContext } from '../../index.jsx';
import { AuthContext } from '../../../../providers/AuthContext';
import { getSubjects, deleteSubjects } from '../../../../services/subjects.service';
import { getUsers } from '../../../../services/user.service.js';
import View from "../../../../pages/administrationPanel/components/View";
import { rows, columns, optionsFilter } from './data'
import ModalContainer from './ModalContainer';

const Subject = () => {
    const {academicLevel} = useContext(ScheduleContext);
    const authContext = useContext(AuthContext);
    const {
        accessToken = null,
        setAccessToken = null,
        refreshToken = null,
        setRefreshToken = null
    } = authContext || {};

    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [updatePage, setUpdatepage] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [subject, setSubject] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(1);
    const [valueFilter, setValueFilter] = useState(new Set([]));

    const [isLoading, setIsLoading] = useState(true);
    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        const callToAPI = async () => {
            if(updatePage){
                setIsLoading(true);
            }
            try{
                const responseTeacher = await getUsers(
                    accessToken,
                    setAccessToken,
                    refreshToken,
                    setRefreshToken,
                    { rol: "docente" }
                );
                setTeachers(responseTeacher.elements);
                const params = {
                    teacher:
                        valueFilter.Profesor?.size > 0 ? valueFilter?.currentKey : null,
                    search: search !== "" ? search : undefined,
                };
                const response = await getSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, [...academicLevel]?.[0], params);
                setSubject(response.elements);
                setRowsContent(rows(response.elements));
            } finally {
                setIsLoading(false);
                setUpdatepage(false);
            }
        }
        callToAPI();
    }, [updatePage])

    const handleCreate = () => {
        onOpen();
        setIsEdit('')
    }

    const handleEdit= (id) => {
        onOpen();
        setIsEdit(id)
    }

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteSubjects(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
                setSelectedKeys(prevKeys => {
                    const newKeys = new Set(prevKeys);
                    newKeys.delete(element);
                    return newKeys;
                });
            }
            
            toast.success('Borrados con éxito');
        } catch(error) {
            toast.warning(error.message);
        } finally {
            setUpdatepage(true);
        }
    }

    return (
        <>
            <View 
                isLoading={isLoading}
                nameElement='Asignatura'
                rows={rowsContent}
                columns={columns}
                valueFilter={valueFilter}
                setValueFilter={setValueFilter}
                optionsFilter={optionsFilter(teachers)}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                totalPage={subject.totalPages}
                search={search}
                setSearch={setSearch}
                offset={offset}
                setOffset={setOffset}
                create
                handleCreate={handleCreate} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete}
            />
            <ModalContainer 
                isEdit={isEdit}
                isOpen={isOpen} 
                onClose={onClose} 
                teachers={teachers}
                setUpdatepage={setUpdatepage}
            />
        </>
    );
}

export default Subject