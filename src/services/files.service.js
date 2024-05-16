const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getFile = async (accessToken, setAccessToken, refreshToken, setRefreshToken, url, isPublic) => {
    const headers = isPublic ? {} : {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const config = {
        method: 'get',
        responseType: 'blob',
        url: url,
        ...headers
    }
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

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

const postFiles = async (accessToken, setAccessToken, refreshToken, setRefreshToken, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/file/upload`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const updateFiles  = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/file/update/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteFiles = async (accessToken, setAccessToken, refreshToken, setRefreshToken, id) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/file/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

export {
    getFile,
    getFiles,
    postFiles,
    updateFiles,
    deleteFiles
}