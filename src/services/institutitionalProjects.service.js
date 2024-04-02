const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getInstitutionalProyects = async (accessToken, refreshToken, setRefreshToken, params) => {

    const config = {
        method: 'get',
        url: `${API_URL}/institutional-projects`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

export {
    getInstitutionalProyects
}