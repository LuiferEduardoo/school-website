const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAdmissionRequest = async (accessToken, refreshToken, setRefreshToken, params) => {

    const config = {
        method: 'get',
        url: `${API_URL}/admission/request`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

const postAdmissionRequest = async (accessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/admission/request`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        body: data
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

export {
    getAdmissionRequest,
    postAdmissionRequest
}