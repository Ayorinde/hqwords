import React from 'react';
import '../styles/main.css';

import UploadForm from '../pageComponents/dashboard/UploadForm';
import Navbar from '../reactStrapComponent/Navbar'
import NavVertical from '../pageComponents/dashboard/NavVertical';


export default function Dashboard(props) {
    if (props.location && props.location.user) {
        let user = props.location.state.result.fullResult;
        console.log(`user: ${JSON.stringify(user, null, 4)}`)
    }

    return (
        <>
            <Navbar />
            <div className="y-dashboard">
                <NavVertical match={props.match}  history={props.history}/>

                {/* <UploadForm /> */}
            </div>
        </>
    )
}