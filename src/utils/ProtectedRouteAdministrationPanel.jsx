import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthContext';

const ProtectedRouteAdministrationPanel = ({ children }) => {
    const { refreshToken } = useContext(AuthContext);

    useEffect(() => {
        // Verifica si el refreshToken está presente
        if (!refreshToken) {
          // Si el refreshToken no está presente, redirige al usuario a la página de inicio de sesión
          window.location.href = "/auth/login"; // Puedes usar Navigate si estás dentro de un componente de navegación de React Router
        }
    }, [refreshToken]); // Se ejecuta cada vez que refreshToken cambia

    // Renderiza el componente protegido si el usuario está autenticado
    return refreshToken ? children : null;
};

export default ProtectedRouteAdministrationPanel;
