const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getCalendar = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, withoutToken) => {
    const headers = !withoutToken ? {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    } : {};
    const config = {
        method: 'get',
        url: `${API_URL}/calendar${id ? `/${id}` : ''}`,
        ...headers,
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const postCalendar = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/calendar`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateCalendar = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/calendar/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}
const deleteCalendar = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/calendar/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getCalendar,
    postCalendar,
    updateCalendar,
    deleteCalendar
}