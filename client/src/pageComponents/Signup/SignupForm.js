import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks'

import { useInput } from '../../hooks/useInput';
import SIGNUP from '../../apollo/mutation/signup';
import { removeClientSetsFromDocument } from 'apollo-utilities';

export default function SignupForm(props) {
    const email = useInput();
    const password = useInput();
    const fname = useInput();
    const lname = useInput();
    const [formValues, setFormValues] = useState(null)

    const [signup, { data, loading, error }] = useMutation(SIGNUP);

    // useEffect(() => {
    //     window.localStorage.setItem('hqwords:user', { ...formValues, token });
    //     console.log('stored user: ', { ...formValues, token })
    //     if (done) {
    //         props.history.push({
    //             pathname: '/dashboard',
    //             state: { user: formValues }
    //         })
    //     }

    // }, [done, formValues, token, props.history])


    const onSubmit = (e) => {
        let formValues = {
            fullName: `${fname} ${lname}`,
            email: email.value, password: password.value
        }
        console.log('all: ', formValues)
        setFormValues(formValues)
        signup({ variables: formValues });


    }
    if (data) {
        console.log('success: ', data);
        console.log('data.signup.token: ', data.signup.token)
        let token = data.signup.token;
        window.localStorage.setItem('hqwords:user', { ...formValues, token });
        props.history.push({
            pathname: '/dashboard',
            state: { user: formValues }
        })

    }
    if (error) {
        console.log('error: ', error);
    }
    return (
        <div className="y-signupform">
            <form>
                <fieldset>
                    <legend>
                        1000s of readers await you, sign up now and start writing
                    </legend>

                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname"
                            {...fname}
                            placeholder="Your first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" id="fname"
                            {...lname}
                            placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                            {...email}
                            id="email" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"
                            {...password}
                            id="password" placeholder="Password" />
                    </div>
                    {loading ? (<p>... signing you up ...</p>) : (error ? error.message : '')}
                    <button type="button"
                        onClick={onSubmit}
                        className="btn btn-primary">Submit</button>



                </fieldset>
            </form>
        </div>
    )
}