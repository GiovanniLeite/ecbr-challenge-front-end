import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Card from '../../components/Card';

import { Container } from './styles';

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Home | Game Tracker</title>
      </Helmet>
      <Container>
        <section>
          <h1>Ofertas</h1>
          <div>
            <form onSubmit={handleSearch}>
              <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </form>
            <p>% de Desconto</p>
          </div>
          <div>
            <Card />
          </div>
        </section>
      </Container>
    </>
  );
}
