import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import DetailCard from './components/DetailCard';
import './App.css';

export interface SearchResult {
  id: string;
  name?: string;
  title?: string;
  [key: string]: any;
}

export type Category = 'people' | 'planets' | 'starships' | 'vehicles' | 'films' | 'species';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('people');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedItem, setSelectedItem] = useState<SearchResult | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search/${category}?q=${query}`);
      setResults(response.data.map((item: any, index: number) => ({ ...item, id: index })));
      setSelectedItem(null);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Star Wars API Search</h1>
      </header>
      <main className="app-main">
        <SearchBar
          query={query}
          category={category}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onSearch={handleSearch}
        />
        <div className="results-container">
          <ResultsList results={results} onSelectItem={setSelectedItem} />
          <DetailCard item={selectedItem} />
        </div>
      </main>
    </div>
  );
};

export default App;
