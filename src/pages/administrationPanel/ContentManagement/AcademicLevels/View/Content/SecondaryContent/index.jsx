import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {useDisclosure} from "@nextui-org/react";
import Modal from './../../../components/Modal';
import ContentView from './../ContentView';
import { Subject } from './../../../components/Form'
import { Course } from './../../../components/Form'
import { rowsCourse, columnsCourse, optionsFilterCourse, rowsSubject, columnsSubject, optionsFilterSubject } from './data';

const SecondayContent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isSubject = location.pathname.endsWith('/subject');
    const isCourse = location.pathname.endsWith('/course');

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [elementEdit, setElementEdit] = useState('')

    useEffect(() => {
        if (!isSubject && !isCourse) {
            navigate("../../");
        }
    }, [isSubject, isCourse, navigate]);

    const handleEdit = (id) => {
        setElementEdit(id);
        onOpen()
    }

    const handleCreate = () => {
        setElementEdit('')
        onOpen()
    }

    const getTitle = () => {
        if (isSubject) return 'Niveles academicos - Asignatura';
        if (isCourse) return 'Niveles academicos - Curso';
        return 'Niveles academicos';
    };

    const getElementName = () => {
        if (isSubject) return 'asignatura';
        if (isCourse) return 'curso';
        return '';
    };

    const getRows = () => {
        return isSubject ? rowsSubject : isCourse ? rowsCourse : [];
    };

    const getColumns = () => {
        return isSubject ? columnsSubject : isCourse ? columnsCourse : [];
    };

    const getOptionsFilter = () => {
        return isSubject ? optionsFilterSubject : isCourse ? optionsFilterCourse : [];
    };

    return (
        <>
            <ContentView
                title={getTitle()}
                elementName={getElementName()}
                rows={getRows()}
                columns={getColumns()}
                optionsFilter={getOptionsFilter()}
                handleCreate={handleCreate}
                handleEdit={handleEdit}
            />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                elementEdit={elementEdit}
                elementName={getElementName()}
            >
                {isSubject && <Subject />}
                {isCourse && <Course />}
            </Modal>
        </>
    );
}

export default SecondayContent