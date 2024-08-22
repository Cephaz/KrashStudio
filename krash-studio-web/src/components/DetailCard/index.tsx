import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectSelectedItem } from '../../store/selectors';
import styles from './styles.module.css';

const DetailCard: React.FC = () => {
  const selectedItem = useAppSelector(selectSelectedItem);

  if (!selectedItem) {
    return (
      <div className={styles.card}>
        <p className={styles.noItem}>Select an item to view details</p>
      </div>
    );
  }

  const excludedKeys = ['name', 'title', 'created', 'edited', 'url', 'id'];
  const details = Object.entries(selectedItem).filter(([key]) => !excludedKeys.includes(key));

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Details</h2>
      <h3 className={styles.itemName}>{selectedItem.name || selectedItem.title}</h3>
      <div className={styles.detailsList}>
        {details.map(([key, value]) => (
          <div key={key} className={styles.detailItem}>
            <span className={styles.detailKey}>{key.replace('_', ' ')}:</span>
            <span className={styles.detailValue}>{value as React.ReactNode}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
