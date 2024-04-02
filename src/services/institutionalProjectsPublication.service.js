const API_URL = import.meta.env.VITE_API;
import { authorizedRequest } from './auth.service';

const getInstitutionalProyectsPublications = async (accessToken, refreshToken, setRefreshToken, idProyect, params) => {

    const config = {
        method: 'get',
        url: `${API_URL}/institutional-projects/${idProyect}/publication`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: params
    };
    return await authorizedRequest(config, refreshToken, setRefreshToken);
};

export {
    getInstitutionalProyectsPublications
}