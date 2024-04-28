import { useState, useEffect } from 'react';
import StoreGamesSelect from './StoreGamesSelect';

export default function StoreGames() {
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
    <StoreGamesSelect stores={stores} />
  );
}

export default StoreGames;