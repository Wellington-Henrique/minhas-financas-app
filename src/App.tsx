

import { BrowserRouter } from 'react-router-dom';

import { Theme } from './styles/Theme';
import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';
import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
        </Theme>
      </BrowserRouter>
    </Container>
  )
}

export default App