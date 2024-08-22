import React from 'react';
import styles from './styles.module.css';

interface SearchResult {
  id: string;
  name?: string;
  title?: string;
  [key: string]: any;
}

interface ResultsListProps {
  results: SearchResult[];
  onSelectItem: (item: SearchResult) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ results, onSelectItem }) => {
  if (results.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Results</h2>
        <p className={styles.noResults}>No results found.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Results</h2>
      <ul className={styles.list}>
        {results.map((item) => (
          <li
            key={item.id}
            className={styles.listItem}
            onClick={() => onSelectItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`Select ${item.name || item.title}`}
          >
            {item.name || item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
