// import { SearchGameContainer } from "./style";
import SearchGame from "../../components/search-game/search-game";
import { List } from "./style";


export default function Home() {
  return (
    <div className = "nav-bar">
      <nav>
        <List>
          <li>
            <SearchGame />
          </li>
        </List>
      </nav>
    </div>
  );
}