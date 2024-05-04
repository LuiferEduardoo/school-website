import React, { useEffect, useState, useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import ContentView from '../../components/ContentView';
import { AuthContext } from '../../../../../providers/AuthContext';
import { getNews, deleteNews } from '../../../../../services/news.service';
import queryParameters from '../../../../../utils/queryParameters';
import { rows, columns, optionsFilter } from './data';

const ViewComponent = () => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [publications, setPublications] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(1);
    const [valueFilter, setValueFilter] = useState(new Set([]));
    const [isLoading, setIsloading] = useState(true);
    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    }

    const handleCreate = () => {
        navigate('create');
    }

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteInstitutionalProject(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
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
            setUpdatePage(true);
        }
    }
    useEffect(()=> {
        const handleParams = (params) => {
            const { Importante, Visible } = valueFilter;
            const filters = {
                important: Importante?.size > 0 ? Importante?.currentKey : null,
                visible: Visible?.size > 0 ? Visible?.currentKey : null,
                search: search !== '' ? search : undefined,
            };
            queryParameters(params, filters);
        }
        const callAPI = async () => {
            try{
                if(updatePage){
                    setIsloading(true);
                }
                const params = {
                    offset: offset -1,
                }
                handleParams(params);
                const response = await getNews(accessToken, setAccessToken, refreshToken, setRefreshToken, null, params);
                setPublications(response);
                setRowsContent(rows(response.elements));
            } finally{
                setIsloading(false);
            }
        }
        callAPI();
    }, [search, valueFilter, offset, updatePage])
    return (
        <ContentView
            isLoading={isLoading}
            title="Noticias"
            elementName="noticias"
            rows={rowsContent}
            columns={columns}
            valueFilter={valueFilter}
            setValueFilter={setValueFilter}
            optionsFilter={optionsFilter}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            totalPage={publications.totalPages}
            search={search}
            setSearch={setSearch}
            create
            handleCreate={handleCreate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            offset={offset}
            setOffset={setOffset}
        />
    );
}

export default ViewComponent