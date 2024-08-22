import React from 'react';
import styles from './styles.module.css';

const CATEGORIES = {
  people: 'People',
  planets: 'Planets',
  starships: 'Starships',
  vehicles: 'Vehicles',
  films: 'Films',
  species: 'Species',
} as const;

type Category = keyof typeof CATEGORIES;

interface SearchBarProps {
  query: string;
  category: Category;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: Category) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, category, onQueryChange, onCategoryChange, onSearch }) => {
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value as Category);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Luke"
        className={styles.searchInput}
        aria-label="Search term"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className={styles.categorySelect}
        aria-label="Select category"
      >
        {Object.entries(CATEGORIES).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
