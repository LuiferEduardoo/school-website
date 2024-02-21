import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import View from '../../../components/View';
import { rows, columns, optionsFilter } from './data'

const ViewComponent = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [isAllSelect, setAllSelect] = useState(false);
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    }

    const handleCreate = () => {
        navigate('create');
    }
    return (
        <>
            <Helmet>
                <title>Noticias</title>
            </Helmet>
            <View 
                optionsFilter={optionsFilter} 
                setAllSelect={setAllSelect} 
                rows={rows} 
                columns={columns} 
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys} 
                isAllSelect={isAllSelect} 
                nameElement='noticias'
                elementPath="" 
                handleCreate={handleCreate} 
                handleEdit={handleEdit} 
            />
        </>
    )
}

export default ViewComponent