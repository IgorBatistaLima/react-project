import { SearchGameContainer } from "./style";
import SearchGame from "../../components/search-game/search-game";

export default function Home() {
  return (
    <div>
      <h1>Game Search</h1>
      <nav>
        <ul>
          <li>
            <SearchGame />
          </li>
        </ul>
      </nav>
    </div>
  );
}