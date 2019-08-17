import React from 'react';
import '../styles/main.css';

import UploadForm from '../pageComponents/dashboard/UploadForm';


export default function Dashboard(props) {
    if (props.location && props.location.user) {
        let user = props.location.state.result.fullResult;
        console.log(`flights: ${JSON.stringify(user, null, 4)}`)
    }
    return (
        <div className="y-dashboard">

            <UploadForm />
        </div>
    )
}