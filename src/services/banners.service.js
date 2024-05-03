const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getAllBanners = async (accessToken, setAccessToken, refreshToken, setRefreshToken,)  => {
    const config = {
        method: 'get',
        url: `${API_URL}/banner`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const getBanners = async (accessToken, setAccessToken, refreshToken, setRefreshToken, banner) => {
    const config = {
        method: 'get',
        url: `${API_URL}/banner/${banner}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const postBanners = async (accessToken, setAccessToken, refreshToken, setRefreshToken, banner, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/banner/${banner}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}
const deleteBanners = async (accessToken, setAccessToken, refreshToken, setRefreshToken, banner, data) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/banner/${banner}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getAllBanners,
    getBanners,
    postBanners,
    deleteBanners
}