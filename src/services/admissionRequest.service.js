const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAdmissionStatus = async (numberDocument) => {
    const config = {
        method: 'get',
        url: `${API_URL}/admission/status/${numberDocument}`,
    };
    return await authorizedRequest(config);
}
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

const postAdmissionRequest = async (data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/admission/request`,
        data: data
    };
    return await authorizedRequest(config);
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
    getAdmissionStatus,
    getAdmissionRequest,
    postAdmissionRequest,
    updateAdmissionRequest,
    deleteAdmissionRequest
}