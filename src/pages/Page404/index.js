import { Helmet } from 'react-helmet-async';

import { Container } from './styles';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>Erro 404</title>
      </Helmet>
      <Container>
        <h1>
          Erro 404
          <br />
          Página não encontrada
        </h1>
      </Container>
    </>
  );
}
