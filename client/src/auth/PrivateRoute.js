import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {IS_LOGGED_IN} from '../apollo/queries/local'
import {SIGN_UP} from '../constants/routes'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { data } = useQuery(IS_LOGGED_IN);

    return (
      <Route {...rest} 
        render={ props => data.isLoggedIn ? (<Component {...props} />) : (<Redirect to={{pathname: SIGN_UP} }/>) }
      />
    );
}