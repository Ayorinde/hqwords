import React from 'react';

//import './App.css';
import './styles/settings.css';

import apollo from './apollo/configure';
import { GET_SERVICES } from './apollo/queries/serviceModel';

import Services from './components/Services';

import Navbar from './reactStrapComponent/Navbar';
import Carousel from './reactStrapComponent/Carousel';

apollo.client.query({
    query: GET_SERVICES
}).then(result => console.log(result));

function Main() {
    return (
        <div className="main">
            <Navbar />
            <Carousel />

            <Services />
        </div>
    );
}

export default Main;
