import { useState, useEffect } from 'react';
import { Select } from '../../components/store-games/style.js';
import GamesList from '../Games-api/games.jsx'; // Adjust the import path accordingly

export default function StoreGames() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.cheapshark.com/api/1.0/stores';
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(data => {
        setStores(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (selectedStore) {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://www.cheapshark.com/api/1.0/deals?storeID=${selectedStore}`;
      fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(data => {
          setGames(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [selectedStore]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Select onChange={e => setSelectedStore(e.target.value)}>
          <option value="">Select Store</option>
          {stores.map(store => (
            <option key={store.storeID} value={store.storeID}>
              {store.storeName}
            </option>
          ))}
        </Select>
        
      </div>
      <div className='Card-Games'>
      <GamesList games={games} />
      </div>
    </>
  );
}
