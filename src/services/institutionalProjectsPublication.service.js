const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getInstitutionalProyectsPublications = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idProyect, params, idPublication) => {
    const config = {
        method: 'get',
        url: `${API_URL}/institutional-projects/${idProyect}/publication${idPublication ? `/${idPublication}` : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postInstitutionalProjectsPublications = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idProyect, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/institutional-projects/${idProyect}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateInstitutionalProjectsPublications = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idProject, idPublication, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/institutional-projects/${idProject}/${idPublication}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteInstitutionalProjectPublications = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idProject, idPublication) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/institutional-projects/${idProject}/${idPublication}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getInstitutionalProyectsPublications,
    postInstitutionalProjectsPublications,
    updateInstitutionalProjectsPublications,
    deleteInstitutionalProjectPublications
}