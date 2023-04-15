import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

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
    async function getData() {
      try {
        const { data } = await axios.get('/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1/');

        setGameList(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

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
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.965 11.255H12.755L17.745 16.255L16.255 17.745L11.255 12.755V11.965L10.985 11.685C9.845 12.665 8.365 13.255 6.755 13.255C3.165 13.255 0.255005 10.345 0.255005 6.755C0.255005 3.165 3.165 0.255005 6.755 0.255005C10.345 0.255005 13.255 3.165 13.255 6.755C13.255 8.365 12.665 9.845 11.685 10.985L11.965 11.255ZM2.255 6.755C2.255 9.245 4.26501 11.255 6.755 11.255C9.245 11.255 11.255 9.245 11.255 6.755C11.255 4.26501 9.245 2.255 6.755 2.255C4.26501 2.255 2.255 4.26501 2.255 6.755Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </svg>
                </button>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Procurar" />
              </div>
            </form>
            <div id="ordination">
              <span>Odenar por:</span>
              <ul id="order">
                <span onClick={() => setVisible(!visible)}>
                  {order}
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.59 0.294998L6 4.875L1.41 0.294998L0 1.705L6 7.705L12 1.705L10.59 0.294998Z"
                      fill="white"
                    />
                  </svg>
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
            {gameList.map((e) => (
              <Card key={e.gameID} game={e} />
            ))}
          </div>
          <button id="viewMore">Carregar mais</button>
        </section>
      </Container>
    </>
  );
}
