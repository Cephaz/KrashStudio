import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Category} from '../constants/categories';
import {SearchResult} from '../types/swapi';

interface ApiResponse {
  [key: string]: string | number | boolean | null | undefined;
}

interface SearchParams {
  query: string;
  category: Category;
}

const API_BASE_URL = 'http://localhost:3000';

const fetchSearchResults = async ({query, category}: SearchParams): Promise<ApiResponse[]> => {
  const response = await axios.get<ApiResponse[]>(`${API_BASE_URL}/search/${category}`, {
    params: {q: query},
  });
  return response.data;
};

export const searchSwapi = createAsyncThunk<SearchResult[], SearchParams, {rejectValue: string}>(
  'swapi/search',
  async (searchParams, {rejectWithValue}) => {
    try {
      const data = await fetchSearchResults(searchParams);
      return data.map((item, index) => ({
        ...item,
        id: `result-${index}`,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message || 'An error occurred while fetching data');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  },
);
