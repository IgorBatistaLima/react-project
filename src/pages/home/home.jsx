import { useState } from 'react';
import SearchGame from "../../components/search-game/search-game";
import { List } from "./style";
import StoreGames from "../../services/Store-api/store.jsx";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <div className="nav-bar">
        <nav>
          <List>
            <li>
              <SearchGame onSearch={handleSearch} />
            </li>
          </List>
        </nav>
      </div>
      <div>
        <StoreGames games={searchResults} />
      </div>
    </div>
  );
}