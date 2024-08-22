import { Category } from "../constants/categories";

export interface SearchResult {
  id: string;
  name?: string;
  title?: string;
  [key: string]: any;
}

export interface SwapiState {
  query: string;
  category: Category;
  results: SearchResult[];
  selectedItem: SearchResult | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
