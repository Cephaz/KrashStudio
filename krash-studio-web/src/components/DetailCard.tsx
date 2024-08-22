import React from 'react';

interface SearchResult {
  name: string;
  title?: string;
  [key: string]: any;
}

interface DetailCardProps {
  item: SearchResult | null;
}

const DetailCard: React.FC<DetailCardProps> = ({ item }) => {
  if (!item) return null;

  const renderDetails = () => {
    const details = Object.entries(item).filter(
      ([key]) => !['name', 'title', 'created', 'edited', 'url'].includes(key),
    );

    return details.map(([key, value]) => (
      <p key={key}>
        {key.replace('_', ' ')}: {value}
      </p>
    ));
  };

  return (
    <div>
      <h2>Details</h2>
      <p>
        <strong>{item.name || item.title}</strong>
      </p>
      {renderDetails()}
    </div>
  );
};

export default DetailCard;
