import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import DetailCard from './components/DetailCard';

interface SearchResult {
  name: string;
  title?: string;
  [key: string]: any;
}

type Category = 'people' | 'planets' | 'starships' | 'vehicles' | 'films' | 'species';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('people');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedItem, setSelectedItem] = useState<SearchResult | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search/${category}?q=${query}`);
      setResults(response.data);
      setSelectedItem(null);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>SWAPI Search</h1>
      <SearchBar
        query={query}
        category={category}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onSearch={handleSearch}
      />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <ResultsList results={results} onSelectItem={setSelectedItem} />
        </div>
        <div style={{ flex: 1 }}>
          <DetailCard item={selectedItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
