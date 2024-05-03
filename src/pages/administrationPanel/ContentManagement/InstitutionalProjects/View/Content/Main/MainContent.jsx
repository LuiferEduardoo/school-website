import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "../../../../../../../providers/AdministrationPanelContext";
import { useNavigate } from "react-router-dom";
import ContentView from "../../../../components/ContentView";
import queryParameters from "../../../../../../../utils/queryParameters";
import { toast } from 'sonner';
import { getInstitutionalProyects, deleteInstitutionalProject } from "../../../../../../../services/institutitionalProjects.service";
import {rows, columns, optionsFilter} from './data';

const MainContent = () => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const { rolUser, superAdmin, userInformation } = useContext(AdministrationsPanelContext)
    const [institutionalProjects, setInstitutionalProjects] = useState([]);
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
        route += `/publication`;
        navigate(route);
    }

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteInstitutionalProject(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
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
                search: search !== '' ? search : undefined,
            };
            if(!superAdmin.includes(userInformation.rol[0].rol)){
                filters.member = userInformation.id
            }
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
                const response = await getInstitutionalProyects(accessToken, setAccessToken, refreshToken, setRefreshToken, params);
                setInstitutionalProjects(response);
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
            title="Proyectos Institutucionales"
            elementName="proyectos institucionales"
            elementView={[
                {
                    key: 'publications',
                    label: 'Publicaciones'
                }
            ]}
            rows={rowsContent}
            columns={columns}
            valueFilter={valueFilter}
            setValueFilter={setValueFilter}
            optionsFilter={optionsFilter}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            totalPage={institutionalProjects?.totalPage}
            search={search}
            setSearch={setSearch}
            handleView={handleView}
            create={superAdmin.includes(rolUser)}
            handleCreate={handleCreate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            offset={offset}
            setOffset={setOffset}
        />
    )
}

export default MainContent