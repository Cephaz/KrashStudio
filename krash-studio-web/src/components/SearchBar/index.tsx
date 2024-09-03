import React from 'react';
import {useAppDispatch} from '../../store/hooks';
import {setQuery, setCategory} from '../../store/swapiSlice';
import {useSwapiSearch} from '../../hooks/useSwapiSearch';
import {CATEGORIES, Category} from '../../constants/categories';
import styles from './styles.module.css';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const {query, category} = useSwapiSearch();

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(event.target.value as Category));
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter search term"
        className={styles.searchInput}
      />
      <select value={category} onChange={handleCategoryChange} className={styles.categorySelect}>
        {Object.entries(CATEGORIES).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
