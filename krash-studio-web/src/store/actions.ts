import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../constants/categories';
import { SearchResult } from '../types/swapi';

const API_BASE_URL = 'http://0.0.0.0:4010';

export const searchSwapi = createAsyncThunk<
  SearchResult[],
  { query: string; category: Category },
  { rejectValue: string }
>('swapi/search', async ({ query, category }, { rejectWithValue }) => {
  try {
    console.log('API_BASE_URL:', API_BASE_URL);
    const response = await axios.get(`${API_BASE_URL}/search/${category}?q=${query}`);
    return response.data.map((item: any, index: number) => ({ ...item, id: `result-${index}` }));
  } catch (error) {
    return rejectWithValue('An error occurred while fetching data');
  }
});
