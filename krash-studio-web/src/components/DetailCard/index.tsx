import React from 'react';
import styles from './styles.module.css';

interface SearchResult {
  name?: string;
  title?: string;
  [key: string]: any;
}

interface DetailCardProps {
  item: SearchResult | null;
}

const DetailCard: React.FC<DetailCardProps> = ({ item }) => {
  if (!item) {
    return (
      <div className={styles.card}>
        <p className={styles.noItem}>Select an item to view details</p>
      </div>
    );
  }

  const excludedKeys = ['name', 'title', 'created', 'edited', 'url'];
  const details = Object.entries(item).filter(([key]) => !excludedKeys.includes(key));

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Details</h2>
      <h3 className={styles.itemName}>{item.name || item.title}</h3>
      <div className={styles.detailsList}>
        {details.map(([key, value]) => (
          <div key={key} className={styles.detailItem}>
            <span className={styles.detailKey}>{key.replace('_', ' ')}:</span>
            <span className={styles.detailValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
