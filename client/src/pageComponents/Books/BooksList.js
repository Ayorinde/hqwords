import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS, GET_USER_BOOKS } from '../../apollo/queries/books';

import BookItem from './BookItem';

export default function BooksList({listQuery, listTitle}) {
    let theQuery = listQuery? listQuery: GET_BOOKS;
    const { data, loading, error } = useQuery(theQuery);
    if (loading) {
        return (<p> loading .... </p>)
    }
    else {
        if (error) {
            console.log('error: ', error);
            return (<p> Error loading books: {error.message} </p>)
        }
        else {

            let loadedLis = data && data.books.map((book) => (
                <BookItem book={book} key={book._id} _id={book._id} />
            ))

            return (
                <section className="container y-offerings p-3 p-md-5">
                    <h1 className="text-center"> {listTitle || 'Books You Should Read'}</h1>
                    <div className="card-group">
                        {
                            loadedLis.length? loadedLis: 
                            <p className="text-center"> :) There are no books at the moment</p>
                        }
                    </div>
                </section>
            )

        }
    }

}
