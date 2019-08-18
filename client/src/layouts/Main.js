import React from 'react';

import '../styles/main.css'

// import Navbar from '../reactStrapComponent/Navbar'
import Footer from '../pageComponents/Home/Footer';
import MainRouter from '../Router';

export default function MainLayout() {
    return (
        <div className="main">
            {/* <Navbar /> */}
            <MainRouter />
            <Footer />
        </div>
    )
}