import axios from 'axios';

const API_URL = 'https://api-colombia.com/api/v1';

export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`);
    return response.data;
}

export const getRegionesColombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response;
}

/* Buscar una region por id */
export const getRegionColombia = async () => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response;
}
