import { useState, useEffect } from 'react';
import { Select } from './style';

export default function StoreGamesSelect() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('https://www.cheapshark.com/api/1.0/stores')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStores(data);
      });
  }, []);

  return (
    <Select>
      <option value="">All Stores</option>
      {stores.map(store => (
        <option key={store.storeID} value={store.storeID}>
          {store.storeName}
        </option>
      ))}
    </Select>
  );
}