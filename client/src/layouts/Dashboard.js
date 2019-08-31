import React from 'react';

import '../styles/main.css'

import Navbar from '../reactStrapComponent/Navbar'
import Footer from '../pageComponents/Home/Footer';
import MainRouter from '../Router';

export default function DashboardLayout() {
    return (
        <div className="main">
            <h1>Dashboard stuff</h1>
            <Footer />
        </div>
    )
}