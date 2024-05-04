import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import { useNavigate } from "react-router-dom";
import ContentView from "../../../../components/ContentView";
import queryParameters from "../../../../../../../utils/queryParameters";
import { toast } from 'sonner';
import { getAcademicLevels, deleteAcademicLevels } from "../../../../../../../services/academicLevels.service";
import {rows, columns, optionsFilter} from './data';

const View = () => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [academicLevels, setAcademicLevels] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(1);
    const [valueFilter, setValueFilter] = useState(new Set([]));
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [isLoading, setIsloading] = useState(true);
    const [updatePage, setUpdatePage] = useState(false)
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    }
    const handleCreate = () => {
        navigate('create');
    }

    const handleView = (id, element) =>{
        let route = id;
        if (element === "Cursos") {
            route += `/course`;
        } else if (element === "Asignaturas") {
            route += `/subject`;
        }
        navigate(route);
    }

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
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
            const { Modalidad, Jornada, Sede } = valueFilter;
            const filters = {
                modality: Modalidad?.size > 0 ? Modalidad?.currentKey : null,
                educationDay: Jornada?.size > 0 ? Jornada?.currentKey : null,
                campusNumber: Sede?.size > 0 ? Sede?.currentKey : null,
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
                const response = await getAcademicLevels(accessToken, setAccessToken, refreshToken, setRefreshToken, params);
                setAcademicLevels(response);
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
            title="Niveles academicos"
            elementName="niveles academicos"
            elementView={[
                {
                    key: 'course',
                    label: 'Cursos'
                },
                {
                    key: 'subject',
                    label: "Asignaturas"
                }
            ]}
            rows={rowsContent}
            columns={columns}
            valueFilter={valueFilter}
            setValueFilter={setValueFilter}
            optionsFilter={optionsFilter}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            totalPage={academicLevels?.totalPages}
            search={search}
            setSearch={setSearch}
            handleView={handleView}
            create
            handleCreate={handleCreate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            offset={offset}
            setOffset={setOffset}
        />
    );
}

export default View