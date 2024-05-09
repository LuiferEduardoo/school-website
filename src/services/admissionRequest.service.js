const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAdmissionRequest = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params, id) => {

    const config = {
        method: 'get',
        url: `${API_URL}/admission/request/${id ? id : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postAdmissionRequest = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/admission/request`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const updateAdmissionRequest = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/admission/request/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteAdmissionRequest = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/admission/request/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getAdmissionRequest,
    postAdmissionRequest,
    updateAdmissionRequest,
    deleteAdmissionRequest
}