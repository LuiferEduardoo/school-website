import axios from 'axios';
import { getTokenCookie, setTokenCookie, removeTokenCookie } from '../services/AuthService.service';

const login = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/auth/login`, data);
        
        if (response.data) {
            const { tokenAccess, tokenRefresh } = response.data;
            return {tokenAccess, tokenRefresh}
        }
    } catch (error) {
        throw new Error('Correo o contraseña incorrectos')
    }
}

const tokenAccess = async (token) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API}/auth/token-access`,
            {}, // No hay datos en el cuerpo de la solicitud
            {
                headers: {
                    'Authorization': `Bearer ${token}` // Añade el token al encabezado Authorization
                }
            }
        );
        
        if (response.data) {
            const { tokenAccess } = response.data;
            return tokenAccess;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const recovery = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/auth/recovery`, data);
        
        if (response.data) {
            return '¡Hemos enviado un enlace a su correo!'
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

const changePassword = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/auth/change-password`, data);
    } catch (error) {
        throw new Error(error.message)
    }
}

const logout = async (token, setRefreshToken) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API}/auth/log-out`, 
            {}, // No hay datos en el cuerpo de la solicitud
            {
                headers: {
                    'Authorization': `Bearer ${token}` // Añade el token al encabezado Authorization
                }
            }
        );
        removeTokenCookie('access_token');
        removeTokenCookie('refresh_token');
        setRefreshToken(null)
    } catch(error){
        throw new Error(error.message)
    }
}

const authorizedRequest = async (config, setAccessToken, refreshToken, setRefreshToken) => {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            try {
                removeTokenCookie('access_token');
                // Si la solicitud devuelve un código de estado 401, intentar refrescar el token
                const {token, expiresIn} = await tokenAccess(refreshToken);

                setTokenCookie('access_token', token, expiresIn);
                setAccessToken(token);
                // Actualizar el encabezado de autorización con el nuevo token de acceso
                config.headers.Authorization = `Bearer ${token}`;
                // Volver a intentar la solicitud original
                const response = await axios(config);
                return response.data
            } catch(error){
                removeTokenCookie('access_token');
                removeTokenCookie('refresh_token');
                setRefreshToken(null);
                setAccessToken(null);
            }
        } else {
            throw error;
        }
    }
};

export {
    login,
    tokenAccess,
    recovery,
    changePassword,
    logout,
    authorizedRequest
}