import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category} from '../constants/categories';
import {SwapiState, SearchResult} from '../types/swapi';
import {searchSwapi} from './actions';

const initialState: SwapiState = {
  query: '',
  category: 'people',
  results: [],
  selectedItem: null,
  status: 'idle',
  error: null,
};

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    setSelectedItem: (state, action: PayloadAction<SearchResult | null>) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchSwapi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchSwapi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(searchSwapi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || null;
      });
  },
});

export const {setQuery, setCategory, setSelectedItem} = swapiSlice.actions;

export default swapiSlice.reducer;
