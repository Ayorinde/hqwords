import gql from "graphql-tag";

export const GET_SERVICES = gql`
    query services {   
        services {
            name
        }  
    }   
`
    ;