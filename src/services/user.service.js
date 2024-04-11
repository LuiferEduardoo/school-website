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

const getUsers = async (accessToken, setAccessToken, refreshToken, setRefreshToken, params) => {
    const config = {
        method: 'get',
        url: `${API_URL}/users`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

export {
    getUser,
    getUsers
}