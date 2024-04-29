import { Card, CardImg, CardBody, CardTitle, CardText, CardButton } from './style.js';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => {
  if (!game) {
    return null; // ou renderize algum fallback
  }

  return (
    <Card>
      <CardImg variant="top" src={game.thumb} />
      <CardBody>
        <CardTitle>{game.title}</CardTitle>
        <CardText>
          Preço Normal: {game.normalPrice} 
          <br></br>
          Preço de Venda: {game.salePrice}
          <br></br>
          Economia: {`${(game.savings).toFixed(0)}%`}
        </CardText>
      </CardBody>
      <CardButton>Comprar</CardButton>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    normalPrice: PropTypes.string,
    salePrice: PropTypes.string,
    savings: PropTypes.string,
    thumb: PropTypes.string,
  }).isRequired,
};

export default GameCard;