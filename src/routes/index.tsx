import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import Receitas from '../pages/Receitas';
import Despesas from '../pages/Despesas';
import Configuracoes from '../pages/Configuracoes';
import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute><Main/></PrivateRoute>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/income' element={<Receitas/>}/>
        <Route path='/expense' element={<Despesas/>}/>
        <Route path='/Settings' element={<Configuracoes/>}/>
      </Route>
      
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}