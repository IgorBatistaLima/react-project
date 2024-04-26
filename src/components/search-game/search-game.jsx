import {SearchGameButton, SearchGameContainer, SearchGameForm, SearchGameInput} from "./style";

export default function SearchGame() {
  return (
    <SearchGameContainer>
      <SearchGameForm>
        <SearchGameInput placeholder="Search for a game..." />
        <SearchGameButton>Search</SearchGameButton>
      </SearchGameForm>
    </SearchGameContainer>
  );
}