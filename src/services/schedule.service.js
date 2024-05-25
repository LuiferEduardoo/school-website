const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getSchedule = async (accessToken, setAccessToken, refreshToken, setRefreshToken, schoolCoursesId, id, withoutToken) => {
    const headers = !withoutToken ? {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    } : {};
    const config = {
        method: 'get',
        url: `${API_URL}/schedule/${schoolCoursesId}${id ? `/${id}` : ''}`,
        ...headers,
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const postSchedule = async (accessToken, setAccessToken, refreshToken, setRefreshToken, schoolCoursesId, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/schedule/${schoolCoursesId}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateSchedule = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/schedule/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}
const deleteSchedule = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/schedule/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getSchedule,
    postSchedule,
    updateSchedule,
    deleteSchedule
}