import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from '../../services/axios';

import Card from '../../components/Card';
import { Container } from './styles';

export default function Offers() {
  const [gameList, setGameList] = useState([]);
  const [search, setSearch] = useState('');
  // Ordenação
  const [order, setOrder] = useState('% de Desconto');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const { data } = await axios.get('/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1');

      // setGameList(data);
      setGameList([
        {
          internalName: 'SHADOWTACTICSBLADESOFTHESHOGUN',
          // title: null, // 'Shadow Tactics: Blades of the Shogun',
          metacriticLink: '/game/pc/shadow-tactics-blades-of-the-shogun',
          dealID: 'j2lexFQ%2Fx%2FOeqECYZgxWgBxj7YX3hcQs0N3Y8mn8kHk%3D',
          storeID: '1',
          gameID: '158443',
          salePrice: '3.99',
          normalPrice: '39.99',
          isOnSale: '1',
          savings: '90.022506',
          metacriticScore: '85',
          steamRatingText: 'Overwhelmingly Positive',
          steamRatingPercent: '96',
          steamRatingCount: '26903',
          steamAppID: '418240',
          releaseDate: 1480982400,
          lastChange: 1681594022,
          dealRating: '9.7',
          thumb: null, // 'https://cdn.cloudflare.steamstatic.com/steam/apps/418240/capsule_sm_120.jpg?t=1674570965',
        },
        {
          internalName: 'WARHAMMERENDTIMESVERMINTIDE',
          title: 'Warhammer: End Times - Vermintide',
          metacriticLink: '/game/pc/warhammer-end-times---vermintide',
          dealID: 'IFYr9AIXHCkSKU0rkj1Tl2V1Cvk%2BWPz%2FmGaH2%2F%2BufYc%3D',
          storeID: '1',
          gameID: '145156',
          salePrice: '2.99',
          normalPrice: '29.99',
          isOnSale: '1',
          savings: '90.030010',
          metacriticScore: '79',
          steamRatingText: 'Very Positive',
          steamRatingPercent: '82',
          steamRatingCount: '12741',
          steamAppID: '235540',
          releaseDate: 1445558400,
          lastChange: 1681594217,
          dealRating: '9.3',
          thumb: 'https://cdn.cloudflare.steamstatic.com/steam/apps/235540/capsule_sm_120.jpg?t=1656431954',
        },
      ]);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao encontrar jogos.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleOrder = (name) => {
    setOrder(name);
    setVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Ofertas | Game Tracker</title>
      </Helmet>
      <Container>
        <section>
          <h1>Ofertas</h1>
          <div id="filters">
            <form onSubmit={handleSearch}>
              <div id="search">
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Procurar" />
              </div>
            </form>
            <div id="ordination">
              <span>Ordenar por:</span>
              <ul id="order">
                <span onClick={() => setVisible(!visible)}>
                  {order}
                  <i className="bx bx-chevron-down"></i>
                </span>
                <li className={visible ? 'visible' : 'hidden'}>
                  <ul>
                    <li
                      onClick={() => handleOrder('% de Desconto')}
                      className={order === '% de Desconto' ? 'active' : ''}
                    >
                      % de Desconto
                    </li>
                    <li onClick={() => handleOrder('Maior Preço')} className={order === 'Maior Preço' ? 'active' : ''}>
                      Maior Preço
                    </li>
                    <li onClick={() => handleOrder('Menor Preço')} className={order === 'Menor Preço' ? 'active' : ''}>
                      Menor Preço
                    </li>
                    <li onClick={() => handleOrder('Título')} className={order === 'Título' ? 'active' : ''}>
                      Título
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div id="games">
            {gameList.map((game) => (
              <Card key={game.gameID} game={game} />
            ))}
          </div>
          <button id="viewMore">Carregar mais</button>
        </section>
      </Container>
    </>
  );
}
