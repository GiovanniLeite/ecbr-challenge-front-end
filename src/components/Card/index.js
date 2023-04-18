import PropTypes from 'prop-types';

import { moneyFormat } from '../../utils/moneyFormat';
import { Container } from './styles';

export default function Card({ game }) {
  let savings = Math.round(game.savings);

  if (!Number.isNaN(savings)) {
    savings = savings === 100 ? 'GRÁTIS' : `-${savings}%`;
  } else {
    savings = '-0%';
  }

  return (
    <Container>
      <div id="cardContent">
        <div id="cardImage">
          <img src={game.thumb || '/assets/no-image.jpg'} alt={game.title} />
        </div>
        <h2 title={game.title}>{game.title || 'Sem nome'}</h2>
        <div id="cardBottom">
          <button>DETALHES</button>
          <div id="price">
            <div>
              <p>$ {moneyFormat(game.normalPrice || game.salePrice || 0)}</p>
              <h3>$ {moneyFormat(game.salePrice || 0)}</h3>
            </div>
            <span>{savings}</span>
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
