import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { getUser } from './../services/user.service'

export const AdministrationsPanelContext = createContext();

export const AdministrationsPanelProvider = ({ children }) => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken, isLoading, setIsloading } = useContext(AuthContext);
    const [userInformation, setUserInformation] = useState(null); // Cambiado a null para indicar que aún no se ha recibido la información
    const [rolUser, setRolUser] = useState('');
    const [superAdmin, setSuperAdmin] = useState(['administrador', 'coordinador', 'rector']);
    const [updateAllPage, setUpdateAllPage] = useState(true)

    useEffect(() => {
        const getInformationUser = async () => {
            try {
                const user = await getUser(accessToken, setAccessToken, refreshToken, setRefreshToken);
                setRolUser(user.rol?.[0].rol);
                setUserInformation(user);
            } catch (error) {
                // Manejar errores si es necesario
            } finally {
                setIsloading(false); // Cuando la solicitud se complete, establece loading en falso
                setUpdateAllPage(false)
            }
        };
        getInformationUser();
    }, [accessToken, refreshToken, setRefreshToken, updateAllPage]);
    
    return (
        <AdministrationsPanelContext.Provider value={{ userInformation, rolUser, superAdmin, updateAllPage, setUpdateAllPage }}>
            {children}
        </AdministrationsPanelContext.Provider>
    );
};