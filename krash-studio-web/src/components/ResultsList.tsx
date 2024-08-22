import React from 'react';

interface SearchResult {
  name: string;
  title?: string;
  [key: string]: any;
}

interface ResultsListProps {
  results: SearchResult[];
  onSelectItem: (item: SearchResult) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ results, onSelectItem }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((item, index) => (
          <li key={index} onClick={() => onSelectItem(item)}>
            {item.name || item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
