const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAdmissionRequest = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params) => {

    const config = {
        method: 'get',
        url: `${API_URL}/admission/request`,
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
        body: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

export {
    getAdmissionRequest,
    postAdmissionRequest
}