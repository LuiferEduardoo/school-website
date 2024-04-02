import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdministrationsPanelContext } from '../providers/AdministrationPanelContext';

const ProtectedRouteAdministrationPanelRouter = ({ children }) => {
    const { rolUser, superAdmin } = useContext(AdministrationsPanelContext);

    const navigate = useNavigate();
    useEffect(() => {
        // Verifica si el usuario tiene el rol de superadministrador
        if (!superAdmin.includes(rolUser)) {
            // Si el usuario no tiene el rol de superadministrador, redirige al usuario a la página de inicio
            navigate("../"); // Utiliza la función `navigate` para redirigir
        }
    }, [rolUser, superAdmin]); // Se ejecuta cada vez que rolUser o superAdmin cambian

    // Renderiza el componente protegido si el usuario tiene el rol de superadministrador
    return superAdmin.includes(rolUser) ? children : null;
};

export default ProtectedRouteAdministrationPanelRouter;