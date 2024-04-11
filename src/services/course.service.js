const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getCourses = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademicLevel, params, id) => {
    const config = {
        method: 'get',
        url: `${API_URL}/school-courses/${idAcademicLevel}/${id ? id : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postCourse = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademicLevel, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/school-courses/${idAcademicLevel}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const updateCourse = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idCourse, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/school-courses/${idCourse}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
}

const deleteCourse = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idSubject) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/school-courses/${idSubject}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

export {
    getCourses,
    postCourse,
    updateCourse,
    deleteCourse
}


export default [
    {
        id: 1,
        grade: 9,
        course: 1
    },
    {
        id: 2,
        grade: 9,
        course: 2
    },
    {
        id: 3,
        grade: 9,
        course: 3
    }
]