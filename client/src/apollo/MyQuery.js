import React from 'react'
import { Query } from 'react-apollo';

export default function MyQuery(props) {
    let theQuery = (
        <Query query={props.query}>
            {({ data, loading, error }) => {
                if (loading) return <p> ... loading ... </p>;
                if (error) return <p>error: {console.log('error: ', error)}</p>;

                let theData = data || {}
                return props.children({ data: theData, loading, error })
            }
            }
        </Query>

    )
    return theQuery;
};