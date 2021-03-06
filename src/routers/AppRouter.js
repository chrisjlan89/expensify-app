import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import  LoginPage  from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute'




export const history = createHistory();






const AppRouter = () => (
    <Router history={history}>
    <div>
        
        <Switch>
            <Route path='/' component={LoginPage} exact={true}/> 
            <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
            <PrivateRoute path='/create' component={AddExpensePage}/>
            <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
            <Route path='/help' component={HelpPage}/>
            <Route  component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)


export default AppRouter;
