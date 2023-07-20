import { Route } from 'react-router-dom';

// import Login from '../pages/Login';
import Main from '../pages/Main';
import Receitas from '../pages/Receitas';
import Despesas from '../pages/Despesas';

export const PublicRoutes = () => {
    return(
        <>
            <Route path='/' element={<Main/>}>
                <Route path='/receitas' element={<Receitas/>}/>
                <Route path='/despesas' element={<Despesas/>}/>
            </Route>
        </>
    )
}