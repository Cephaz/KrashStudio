import React, {useEffect} from 'react';
import {useDebounce} from 'use-debounce';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setQuery, setCategory} from '../../store/swapiSlice';
import {searchSwapi} from '../../store/actions';
import {selectQuery, selectCategory} from '../../store/selectors';
import {CATEGORIES, Category} from '../../constants/categories';
import styles from './styles.module.css';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectQuery);
  const category = useAppSelector(selectCategory);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchSwapi({query: debouncedQuery, category}));
    }
  }, [debouncedQuery, category, dispatch]);

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
