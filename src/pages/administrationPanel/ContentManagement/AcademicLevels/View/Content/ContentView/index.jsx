import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import View from '../../../../../components/View';

const ContentView = (props) => {
    const navigate = useNavigate();

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
                <title>{props.title}</title>
            </Helmet>
            <View 
                optionsFilter={props.optionsFilter} 
                valueFilter={props.valueFilter} 
                setValueFilter={props.setValueFilter}
                rows={props.rows} 
                columns={props.columns} 
                selectedKeys={props.selectedKeys} 
                setSelectedKeys={props.setSelectedKeys}  
                nameElement={props.elementName}
                elementView={props.elementView}
                totalPage={props.totalPage}
                search={props.search}
                setSearch={props.setSearch}
                handleCreate={props.handleCreate} 
                handleEdit={props.handleEdit} 
                handleView={handleView}
                handleDelete={props.handleDelete}
                offset={props.offset} 
                setOffset={props.setOffset}
            />
        </>
    );
} 

export default ContentView