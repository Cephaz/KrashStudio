import React from 'react';

type Category = 'people' | 'planets' | 'starships' | 'vehicles' | 'films' | 'species';

interface SearchBarProps {
  query: string;
  category: Category;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: Category) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, category, onQueryChange, onCategoryChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Enter search term"
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value as Category)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
      </select>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
