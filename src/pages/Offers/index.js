/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from '../../services/axios';

import Card from '../../components/Card';
import { Container } from './styles';
import Loading from '../../components/Loading';

export default function Offers() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState([]);
  const [search, setSearch] = useState(''); // Busca
  const [currentPage, setCurrentPage] = useState(0); // Página atual

  // Ordenação
  const [order, setOrder] = useState(['% de Desconto', 'savings']); // Nome e parâmetro de URL
  const [visible, setVisible] = useState(false); // Visibilidade das opções de ordenação

  const getData = async (viewMorePage, orderParamUrl) => {
    setIsLoading(true);

    try {
      // Usa os parâmetros enviados se foi disparado pelo "Carregar mais" ou "Ordenar por"
      const { data } = await axios.get(
        `/api/1.0/deals?pageNumber=${viewMorePage || 0}&pageSize=12&storeID=1&onSale=1&AAA=1&sortBy=${
          orderParamUrl[1] || order[1]
        }&title=${search}`,
      );

      let games = data;

      if (viewMorePage) games = [...gameList, ...data];
      if (orderParamUrl[0] === 'Maior Preço') games.reverse();

      setGameList(games);
    } catch (err) {
      console.log(err);
      toast.error('Erro ao encontrar jogos.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(false, false);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getData(false, false);
  };

  const handleOrder = (nameAndUrl) => {
    setOrder(nameAndUrl);
    setVisible(false);
    getData(false, nameAndUrl);
  };

  const handleViewMore = () => {
    setCurrentPage(currentPage + 1);
    getData(currentPage + 1, false);
  };

  return (
    <>
      <Helmet>
        <title>Game Tracker</title>
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
                  {order[0]}
                  <i className="bx bx-chevron-down"></i>
                </span>
                <li className={visible ? 'visible' : 'hidden'}>
                  <ul>
                    <li
                      onClick={() => handleOrder(['% de Desconto', 'savings'])}
                      className={order[0] === '% de Desconto' ? 'active' : ''}
                    >
                      % de Desconto
                    </li>
                    <li
                      onClick={() => handleOrder(['Maior Preço', 'recent'])}
                      className={order[0] === 'Maior Preço' ? 'active' : ''}
                    >
                      Maior Preço
                    </li>
                    <li
                      onClick={() => handleOrder(['Menor Preço', 'price'])}
                      className={order[0] === 'Menor Preço' ? 'active' : ''}
                    >
                      Menor Preço
                    </li>
                    <li
                      onClick={() => handleOrder(['Título', 'title'])}
                      className={order[0] === 'Título' ? 'active' : ''}
                    >
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
          {isLoading && <Loading />}
          <button id="viewMore" onClick={() => handleViewMore()}>
            Carregar mais
          </button>
        </section>
      </Container>
    </>
  );
}
