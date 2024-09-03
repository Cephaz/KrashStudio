import {Category} from '../constants/categories';

export interface SearchResult {
  id: string;
  name?: string;
  title?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export interface SwapiState {
  query: string;
  category: Category;
  results: SearchResult[];
  selectedItem: SearchResult | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
