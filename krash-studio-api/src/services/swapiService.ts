import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const searchSwapi = async (resource: string, query: string) => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/${resource}/?search=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching SWAPI:', error);
    throw error;
  }
};
