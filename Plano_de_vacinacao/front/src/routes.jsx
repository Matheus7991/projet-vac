import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Index from './Pages/Tela_Inicial/tela_inicial';
import Tela_listagem from './Pages/Tela_listagem'
import Tela_agendamento from './Pages/Tela_agendamento'

//import User from './pages/User';
//import EditUser from './pages/User/edit-user'
//import Todos from './pages/Todos';
//import Todo from './pages/Todos/Todo';


const routes = [{
    path: '/',
    component: Index,
    name: "Home",
}, 
{
    path: '/listagem',
    component: Tela_listagem,
    name: "Listagem",
}, 
{
    path: '/agendamento',
    component: Tela_agendamento,
    name: 'Agendamento',
}/*, 
{
    path: '/user',
    component: User,
    name: "User",
},
{
    path: '/user/:id',
    component: EditUser,
    name: 'User',
    header: false,
}*/];


const Routes = () => (
    <BrowserRouter>
        <Header title="Plano de Vacinação" routes={routes}/>
        <Switch>
            {routes.map(({ component, path }) => (
                <Route
                exact
                key={path} 
                path={path} 
                component={component} />
            ))}           
        </Switch>
    </BrowserRouter>
);

export default Routes;