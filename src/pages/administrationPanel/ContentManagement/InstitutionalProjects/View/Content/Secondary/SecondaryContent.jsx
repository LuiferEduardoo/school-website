import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../../../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "../../../../../../../providers/AdministrationPanelContext";
import { useNavigate } from "react-router-dom";
import ContentView from "../../../../components/ContentView";
import queryParameters from "../../../../../../../utils/queryParameters";
import { toast } from 'sonner';
import { getInstitutionalProyectsPublications, deleteInstitutionalProjectPublications } from "../../../../../../../services/institutionalProjectsPublication.service";
import { getInstitutionalProyects } from "../../../../../../../services/institutitionalProjects.service";
import {rows, columns, optionsFilter} from './data';

const SecondaryContent = () => {
    const { institutionalProject } = useParams();
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const { rolUser, superAdmin, userInformation } = useContext(AdministrationsPanelContext);
    const [publications, setPublications] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [membersProjects, setMembersProjects] = useState([]);
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

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteInstitutionalProjectPublications(accessToken, setAccessToken, refreshToken, setRefreshToken, institutionalProject, element);
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
        const handleParams = async (params) => {
            const { Importante, Visible } = valueFilter;
            const filters = {
                important: Importante?.size > 0 ? Importante?.currentKey : null,
                search: search !== '' ? search : undefined,
            };
            const {members} = await getInstitutionalProyects(accessToken, setAccessToken, refreshToken, setRefreshToken, {}, institutionalProject);
            setMembersProjects(members)
            if (!superAdmin.includes(userInformation.rol[0].rol) || !members.some(m => m.userId === userInformation.id && m.isCoordinator)) {
                filters.author = userInformation.id;
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
                
                await handleParams(params);
                const response = await getInstitutionalProyectsPublications(accessToken, setAccessToken, refreshToken, setRefreshToken, institutionalProject, params);
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
            title="Publicaciones"
            elementName="Publicaciones"
            rows={rowsContent}
            columns={columns}
            valueFilter={valueFilter}
            setValueFilter={setValueFilter}
            optionsFilter={optionsFilter}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            totalPage={publications?.totalPages}
            search={search}
            setSearch={setSearch}
            create={membersProjects?.some(m => m.userId === userInformation.id)}
            handleCreate={handleCreate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            offset={offset}
            setOffset={setOffset}
        />
    );
}

export default SecondaryContent