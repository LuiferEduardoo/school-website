const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getFiles = async (accessToken, setAccessToken, refreshToken, setRefreshToken, fileType, idFile, params) => {
    const config = {
        method: 'get',
        url: `${API_URL}/file/${fileType}${idFile ? `/${idFile}` : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getFiles
}