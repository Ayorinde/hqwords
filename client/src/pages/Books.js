import React from 'react';
import '../styles/main.css';

import BookList from '../pageComponents/Books/BooksList'
import Navbar from '../reactStrapComponent/Navbar'

export default function Books(props) {

    return (
        <>
            <Navbar />
            <div className="y-books">
                <BookList />
            </div>

        </>
    )
}