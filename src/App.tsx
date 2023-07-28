

import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { UserProvider } from "./contexts/userContext";

import { ToastContainer } from 'react-toastify';

import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';
import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </Theme>
      </BrowserRouter>
      <ToastContainer autoClose={2000}/>
    </Container>
  )
}

export default App