const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getUser = async (accessToken, setAccessToken, refreshToken, setRefreshToken) => {

    const config = {
        method: 'get',
        url: `${API_URL}/user`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const getUsers = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params, id) => {
    const config = {
        method: 'get',
        url: `${API_URL}/users${id ? `/${id}` : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postUser = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/user`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const updateUser = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/user/${id ? id : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteUser = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/user/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getUser,
    getUsers,
    postUser,
    updateUser,
    deleteUser
}