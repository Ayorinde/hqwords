import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import banner1 from '../images/banner/hqwords-coffee-h570.jpg';
import banner2 from '../images/banner/hqwords-books-571.jpg';
//import banner3 from '../images/banner/hqwords-dairy-572.jpg';

import '../styles/carousel.css';

const items = [
    {
        src: banner1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
    },
    {
        src: banner2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header'
    },
    // {
    //     src: banner3,
    //     altText: 'Slide 3',
    //     caption: 'Slide 3',
    //     header: 'Slide 3 Header'
    // }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;