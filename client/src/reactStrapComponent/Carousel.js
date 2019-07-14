import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import banner1 from '../images/banner/hqwords-coffee-h570.jpg';
import banner2 from '../images/banner/hqwords-books-571.jpg';
//import banner3 from '../images/banner/hqwords-dairy-572.jpg';

import '../styles/carousel.css';

const items = [
    {
        src: banner2,
        altText: 'inspiration',
        caption: 'Feel the power of expressions',
        header: 'Books from amazing authors'
    },
    {
        src: banner1,
        altText: 'publicity',
        caption: 'Let your voice be heard',
        header: 'Publicity for your creativity'
    },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;