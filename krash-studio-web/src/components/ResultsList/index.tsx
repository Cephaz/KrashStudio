import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setSelectedItem } from '../../store/swapiSlice';
import { selectResults, selectStatus, selectError } from '../../store/selectors';
import { SearchResult } from '../../types/swapi';
import styles from './styles.module.css';

const ResultsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const results = useAppSelector(selectResults);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  if (status === 'loading') return <div className={styles.loading}>Loading...</div>;
  if (status === 'failed') return <div className={styles.error}>Error: {error}</div>;
  if (results.length === 0) return <div className={styles.noResults}>No results found.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Results</h2>
      <ul className={styles.list}>
        {results.map((item: SearchResult) => (
          <li
            key={item.id}
            className={styles.listItem}
            onClick={() => dispatch(setSelectedItem(item))}
            tabIndex={0}
            role="button"
          >
            {item.name || item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
