import React from 'react';

import './App.css';

import apollo from './apollo/configure';
import { GET_SERVICES } from './apollo/queries/serviceModel';

import Services from './components/Services';

apollo.client.query({
    query: GET_SERVICES
}).then(result => console.log(result));

function Main() {
    return (
        <div className="Main">
            <Services />
        </div>
    );
}

export default Main;
