import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Category} from '../constants/categories';
import {SearchResult} from '../types/swapi';

interface ApiResponse {
  [key: string]: string | number | boolean | null | undefined;
}

export const searchSwapi = createAsyncThunk<SearchResult[], {query: string; category: Category}, {rejectValue: string}>(
  'swapi/search',
  async ({query, category}, {rejectWithValue}) => {
    try {
      const response = await axios.get<ApiResponse[]>(`http://localhost:3000/search/${category}?q=${query}`);
      return response.data.map((item, index) => ({
        ...item,
        id: `result-${index}`,
      }));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred while fetching data');
    }
  },
);
