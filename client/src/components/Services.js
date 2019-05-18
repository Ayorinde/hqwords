import React from 'react'
import { Query } from 'react-apollo';

import MyQuery from '../apollo/MyQuery';
import { GET_SERVICES } from '../apollo/queries/serviceModel'

export default function Services() {
    return (
        <MyQuery query={GET_SERVICES}>
            {({ data }) => {
                return (<ul>
                    {
                        data.services.map(({ _id, name }) => (
                            <li key={_id}>{name} ....</li>
                        ))
                    }
                </ul>);
            }
            }
        </MyQuery>
    );
};