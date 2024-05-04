import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { useDisclosure } from "@nextui-org/react";
import View from "../../components/View";
import { AuthContext } from "../../../../providers/AuthContext";
import { toast } from 'sonner';
import queryParameters from "../../../../utils/queryParameters";
import { columns, rows, optionsFilter } from "./data";
import { getUsers, deleteUser } from "../../../../services/user.service";
import ModalComponent from "../components/Modal";
import FormContent from "../components/Form";

const ViewContent = () => {
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [rowsContent, setRowsContent] = useState([]);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(1);
    const [valueFilter, setValueFilter] = useState(new Set([]));
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [isLoading, setIsloading] = useState(true);
    const [updatePage, setUpdatePage] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [elementEdit, setElementEdit] = useState();

    const handleCreate = () => {
        setElementEdit();
        onOpen();
    };

    const handleEdit = (id) => {
        setElementEdit(id);
        console.log(id)
        onOpen();
    };
    

    const handleDelete = async (ids) => {
        try {
            const elementToDelete = Array.isArray(ids) ? ids : Array.from(String(ids), Number);
            
            for (const element of elementToDelete) {
                await deleteUser(accessToken, setAccessToken, refreshToken, setRefreshToken, element);
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
            const { Role, Activos } = valueFilter;
            const filters = {
                rol: Role?.size > 0 ? Role?.currentKey : null,
                active: Activos?.size > 0 ? Activos?.currentKey : null,
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
                const response = await getUsers(accessToken, setAccessToken, refreshToken, setRefreshToken, params);
                setUsers(response);
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
                <title>Gestión de usuarios</title>
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
                nameElement='usuarios'
                totalPage={users?.totalPages}
                search={search}
                setSearch={setSearch}
                create
                handleCreate={handleCreate} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete}
                offset={offset} 
                setOffset={setOffset}
            />
            <ModalComponent
                isOpen={isOpen}
                onClose={onClose}
                elementEdit={elementEdit}
                elementName={'usuario'}
            >
                <FormContent 
                    elementEdit={elementEdit}
                    setUpdatePage={setUpdatePage}
                    onClose={onClose}
                />
            </ModalComponent>
        </>
    );
}

export default ViewContent