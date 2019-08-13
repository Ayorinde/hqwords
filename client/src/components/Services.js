import React from 'react'
import { useQuery } from '@apollo/react-hooks';

import { GET_SERVICES } from '../apollo/queries/serviceModel'

export default function Services() {
    const { data, loading, error } = useQuery(GET_SERVICES);
    if (loading) {
        return (<p> loading .... </p>)
    }
    else {
        if (error) {
            console.log('error: ', error);
            return (<p> Error loading services: {error.message} </p>)
        }
        else {

            let loadedLis = data && data.services.map(({ _id, name }) => (
                <li key={_id}>{name} ____</li>
            ))

            return (
                <ul>
                    {loadedLis}
                </ul>
            )

        }
    }
};