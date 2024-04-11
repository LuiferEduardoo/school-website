const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAcademicLevels = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params, idAcademic) => {
    const config = {
        method: 'get',
        url: `${API_URL}/academic-levels${idAcademic ? `/${idAcademic}` : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const postAcademicLevels = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/academic-levels`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateAcademicLevels = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademic, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/academic-levels/${idAcademic}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}
const deleteAcademicLevels = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademic) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/academic-levels/${idAcademic}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getAcademicLevels,
    postAcademicLevels,
    updateAcademicLevels,
    deleteAcademicLevels
}