import gql from "graphql-tag";

export const GET_BOOKS = gql`
    query books {   
        books {
            _id, title, description, authorName, price, artwork
        }  
    }   
`
    ;