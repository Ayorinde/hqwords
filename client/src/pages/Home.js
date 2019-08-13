import React from 'react';
import '../styles/main.css'

import Navbar from '../reactStrapComponent/Navbar';
import Carousel from '../reactStrapComponent/Carousel';
import Offerings from '../pageComponents/Home/Offerings';
import About from '../pageComponents/Home/About';
import Footer from '../pageComponents/Home/Footer';

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Carousel />
            <div className="y-afterheader">
                <Offerings />
                <About />
                {/* <Footer /> */}
            </div>
        </>
    )
}
