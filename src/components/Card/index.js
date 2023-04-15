import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ game }) {
  return (
    <Container>
      <div id="cardContent">
        <div id="cardImage">
          <img src={game.thumb} alt={game.title} />
        </div>
        <h2>{game.title}</h2>
        <div id="cardBottom">
          <button>DETALHES</button>
          <div id="price">
            <div>
              <p>$ {game.normalPrice}</p>
              <h3>$ {game.salePrice}</h3>
            </div>
            <span>-{Math.round(game.savings)}%</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

Card.propTypes = {
  game: PropTypes.shape({
    internalName: PropTypes.string,
    title: PropTypes.string,
    metacriticLink: PropTypes.string,
    dealID: PropTypes.string,
    storeID: PropTypes.string,
    gameID: PropTypes.string,
    salePrice: PropTypes.string,
    normalPrice: PropTypes.string,
    isOnSale: PropTypes.string,
    savings: PropTypes.string,
    metacriticScore: PropTypes.string,
    steamRatingText: PropTypes.string,
    steamRatingPercent: PropTypes.string,
    steamRatingCount: PropTypes.string,
    steamAppID: PropTypes.string,
    releaseDate: PropTypes.number,
    lastChange: PropTypes.number,
    dealRating: PropTypes.string,
    thumb: PropTypes.string,
  }),
};
