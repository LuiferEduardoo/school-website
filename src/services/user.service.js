const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getUser = async (accessToken, refreshToken, setRefreshToken) => {

    const config = {
        method: 'get',
        url: `${API_URL}/user`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

const getUsers = async (accessToken, refreshToken, setRefreshToken) => {
    const config = {
        method: 'get',
        url: `${API_URL}/users`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

export {
    getUser,
    getUsers
}