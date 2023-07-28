import { Outlet } from 'react-router-dom';
import { Container } from './styles';

import Sidebar from '../../components/Sidebar';

import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <Outlet/>
    </Container>
  )
}