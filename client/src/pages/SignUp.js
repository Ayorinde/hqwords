import React from 'react';

import SignupForm from '../pageComponents/Signup/SignupForm';

import '../styles/signup.css';

export default function SignUp(props) {
    return (
        <div className=" container px-3 py-5 y-signupform">
            <SignupForm history={props.history} />
        </div>
    )
}