const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getInstitutionalProyects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params, id) => {
    const config = {
        method: 'get',
        url: `${API_URL}/institutional-projects${id ? `/${id}` : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postInstitutionalProjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/institutional-projects`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateInstitutionalProjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/institutional-projects/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteInstitutionalProject = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idInstitutionalProject) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/institutional-projects/${idInstitutionalProject}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}
export {
    getInstitutionalProyects,
    postInstitutionalProjects,
    updateInstitutionalProjects,
    deleteInstitutionalProject
}