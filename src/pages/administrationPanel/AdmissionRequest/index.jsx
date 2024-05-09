import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { useDisclosure } from "@nextui-org/react";
import View from "../components/View";
import { AuthContext } from "../../../providers/AuthContext";
import queryParameters from "../../../utils/queryParameters";
import { getAdmissionRequest, deleteAdmissionRequest } from "../../../services/admissionRequest.service";
import ModalComponent from "../UsersManagement/components/Modal";
import FormContent from "./components/Form";
import {columns, rows, optionsFilter} from './data'
import { toast } from 'sonner';

const AdmissionRequest = () => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [admissionsRequests, setAdmissionsRequest] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(1);
    const [valueFilter, setValueFilter] = useState(new Set([]));
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [isLoading, setIsloading] = useState(true);
    const [updatePage, setUpdatePage] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [elementEdit, setElementEdit] = useState();

    const handleEdit = (id) => {
        setElementEdit(id);
        onOpen();
    };
    

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteAdmissionRequest(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
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
            const { Genero, Estado } = valueFilter;
            const filters = {
                gender: Genero?.size > 0 ? Genero?.currentKey : null,
                status: Estado?.size > 0 ? Estado?.currentKey : null,
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
                const response = await getAdmissionRequest(accessToken, setAccessToken, refreshToken, setRefreshToken, params);
                setAdmissionsRequest(response);
                setRowsContent(rows(response.elements));
            } finally{
                setIsloading(false);
                setUpdatePage(false)
            }
        }
        callAPI();
    }, [search, valueFilter, offset, updatePage])

    return (
        <>
            <Helmet>
                <title>Solicitudes de admisión</title>
            </Helmet>
            <View
                isLoading={isLoading}
                optionsFilter={optionsFilter} 
                valueFilter={valueFilter} 
                setValueFilter={setValueFilter}
                rows={rowsContent} 
                columns={columns} 
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys}  
                nameElement='solictudes de admisión'
                totalPage={admissionsRequests?.totalPages}
                search={search}
                setSearch={setSearch}
                handleEdit={handleEdit} 
                handleDelete={handleDelete}
                offset={offset} 
                setOffset={setOffset}
            />
            <ModalComponent
                isOpen={isOpen}
                onClose={onClose}
                elementEdit={elementEdit}
                elementName={'Solicitud de admisión'}
            >
                <FormContent 
                    setUpdatePage={setUpdatePage}
                    onClose={onClose}
                    id={elementEdit}
                />
            </ModalComponent>
        </>
    );
}

export default AdmissionRequest