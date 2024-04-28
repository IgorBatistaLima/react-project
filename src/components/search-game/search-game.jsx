import {SearchGameContainer, SearchGameForm, SearchGameInput} from "./style";
import ButtonSearch from "../button-search/button-search";
import StoreGames from "../store-games/store-games";


export default function SearchGame() {
  return (
    <SearchGameContainer>
      <SearchGameForm>
        <SearchGameInput placeholder="Search for a game..." />
        <ButtonSearch />
        <StoreGames />
      </SearchGameForm>
    </SearchGameContainer>
  );
}