import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import View from '../../../../../components/View';

const ContentView = ({ title, elementName, elementView, rows, columns, optionsFilter, handleCreate, handleEdit }) => {
    const navigate = useNavigate();
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [isAllSelect, setAllSelect] = useState(false);

    const handleView = (id, element) =>{
        let route = id;
        if (element === "Cursos") {
            route += `/course`;
        } else if (element === "Asignaturas") {
            route += `/subject`;
        }
        navigate(route);
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <View 
                optionsFilter={optionsFilter} 
                setAllSelect={setAllSelect} 
                rows={rows} 
                columns={columns} 
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys} 
                isAllSelect={isAllSelect} 
                nameElement={elementName}
                elementView={elementView}
                elementPath="" 
                handleCreate={handleCreate} 
                handleEdit={handleEdit} 
                handleView={handleView}
            />
        </>
    );
} 

export default ContentView