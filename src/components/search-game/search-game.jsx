import { useState, useMemo} from 'react';
import { SearchGameContainer, SearchGameForm, SearchGameInput } from "./style";
import ButtonSearch from "../button-search/button-search";
import GamesList from '../../services/Games-api/games';
import PropsTypes from 'prop-types';
import * as yup from 'yup';

const schema = yup.object().shape({
  searchTerm: yup.string().required('O campo de pesquisa é obrigatório'),
});

function SearchGame({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    schema.validate({ searchTerm })
      .then(() => {
        setError('');
        onSearch(searchTerm);
      })
      .catch(err => {
        setError(err.errors[0]); 
      });
  };

  return (
    <SearchGameContainer>
      <SearchGameForm onSubmit={handleSearchSubmit}>
        <SearchGameInput
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div style={{ width: '100%', textAlign: 'left', color: 'red' }}>
          <div>
          {error && <p>{error}</p>}
          </div>
        </div>
        <ButtonSearch type="submit" />
      </SearchGameForm>
    </SearchGameContainer>
  );
}

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = searchTerm => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => console.error('Error:', error));
  };

  const totalGames = useMemo(() => {
    return searchResults.length;
  }, [searchResults]);

  return (
    <>
      <SearchGame onSearch={handleSearch} />
      <div className='Card-Games' style={{ marginTop: '20px' }}>
        <GamesList games={searchResults} />
      </div>
      <div>Total de jogos encontrados: {totalGames}</div>
    </>
  );
}

SearchGame.propTypes = {
  onSearch: PropsTypes.func.isRequired,
};