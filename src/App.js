import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import Routers from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Header />
          <Routers />
          <Footer />
          <GlobalStyles />
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
