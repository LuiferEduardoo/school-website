const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getSubjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademicLevel, params, idSubject) => {
    const config = {
        method: 'get',
        url: `${API_URL}/subject/${idAcademicLevel}/${idSubject ? idSubject : ''}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const postSubjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idAcademicLevel, data) => {
    const config = {
        method: 'post',
        url: `${API_URL}/subject/${idAcademicLevel}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const updateSubjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idSubjects, data) => {
    const config = {
        method: 'patch',
        url: `${API_URL}/subject/${idSubjects}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }, 
        data: data
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

const deleteSubjects = async (accessToken, setAccessToken, refreshToken, setRefreshToken, idSubject ) => {
    const config = {
        method: 'delete',
        url: `${API_URL}/subject/${idSubject}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return await authorizedRequest(config, setAccessToken, refreshToken, setRefreshToken);
};

export {
    getSubjects,
    postSubjects,
    updateSubjects,
    deleteSubjects
}

export default [
    {
        id: 1,
        name: 'Informatica',
        academicLevelId: 1,
        teacherId: 2,
        teacher: {
            name: "Juan",
                lasTname: "Lopez",
                rol: [
                    {
                        rol: "docente"
                    }
                ],
                image: [
                    {
                        id: 2,
                        imageId: 12,
                        image: {
                            file: {
                                url: "https://conceptodefinicion.de/wp-content/uploads/2014/12/Estudiante-2.jpg"
                            }
                        }
                    }
                ]
        }
    },
    {
        id: 2,
        name: 'Matematicas',
        academicLevelId: 1,
        teacherId: 2,
        teacher: {
            name: "Juan",
                lasTname: "Lopez",
                rol: [
                    {
                        rol: "docente"
                    }
                ],
                image: [
                    {
                        id: 2,
                        imageId: 12,
                        image: {
                            file: {
                                url: "https://conceptodefinicion.de/wp-content/uploads/2014/12/Estudiante-2.jpg"
                            }
                        }
                    }
                ]
        }
    },
    {
        id: 3,
        name: 'Sociales',
        academicLevelId: 1,
        teacherId: 2,
        teacher: {
            name: "Juan",
                lasTname: "Lopez",
                rol: [
                    {
                        rol: "docente"
                    }
                ],
                image: [
                    {
                        id: 2,
                        imageId: 12,
                        image: {
                            file: {
                                url: "https://conceptodefinicion.de/wp-content/uploads/2014/12/Estudiante-2.jpg"
                            }
                        }
                    }
                ]
        }
    },
    {
        id: 4,
        name: 'Español',
        academicLevelId: 1,
        teacherId: 2,
        teacher: {
            name: "Juan",
                lasTname: "Lopez",
                rol: [
                    {
                        rol: "docente"
                    }
                ],
                image: [
                    {
                        id: 2,
                        imageId: 12,
                        image: {
                            file: {
                                url: "https://conceptodefinicion.de/wp-content/uploads/2014/12/Estudiante-2.jpg"
                            }
                        }
                    }
                ]
        }
    }
]