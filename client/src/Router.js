import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from './constants/routes';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import BooksPage from './pages/Books';

import {PrivateRoute} from './auth/PrivateRoute';


// import './styles/settings.css';
// import './index.css';

function App() {
    return (
        <Router>
            <div className="container-fluid app">
                <Route exact path={routes.LANDING} component={Home} />
                <Route path={routes.SIGN_UP} component={SignUpPage} />
                <Route path={routes.BOOKS} component={BooksPage} />
                <PrivateRoute path={routes.DASHBOARD} component={Dashboard} />
            </div>
        </Router>
    );
}

export default App;
