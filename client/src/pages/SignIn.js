import React from 'react';

import SigninForm from '../pageComponents/SignIn/SigninForm';

import '../styles/signup.css';

import Navbar from '../reactStrapComponent/Navbar';


export default function SignUp(props) {
    return (
        <>
            <Navbar />
            <div className=" container px-3 py-5 y-signupform">
                <SigninForm history={props.history} />
            </div>
        </>
    )
}