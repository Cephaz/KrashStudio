import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../constants/categories';
import { SearchResult } from '../types/swapi';

export const searchSwapi = createAsyncThunk<
  SearchResult[],
  { query: string; category: Category },
  { rejectValue: string }
>('swapi/search', async ({ query, category }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:3000/search/${category}?q=${query}`);
    return response.data.map((item: any, index: number) => ({ ...item, id: `result-${index}` }));
  } catch (error) {
    return rejectWithValue('An error occurred while fetching data');
  }
});
