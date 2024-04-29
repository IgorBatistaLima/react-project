import GameCard from '../../components/card-game/card-games.jsx';
import PropsTypes from 'prop-types';

const cardGamesStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' };

const GamesList = ({ games }) => {
  return (
    <section className='Card-Games' style={cardGamesStyle}>
      {games && games.map(game => (
        <GameCard key={game.dealID} game={game} title={game.title} salePrice={game.salePrice} savings={game.savings} />
      ))}
    </section>
  );
}

GamesList.propTypes = {
  games: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default GamesList;