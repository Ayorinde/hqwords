import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks'

import { Link, NavLink as RLink, Route } from 'react-router-dom'


import { useInput } from '../../hooks/useInput';
import SIGNIN from '../../apollo/mutation/signin';
import * as routes from '../../constants/routes';
import * as constants from '../../constants/localsaves';
export default function SignupForm(props) {
    const email = useInput();
    const password = useInput();
    const [formValues, setFormValues] = useState(null)

    const [login, { data, loading, error }] = useMutation(SIGNIN);

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

    useEffect(() => {
        if (data) {
            console.log('success: ', data);
            console.log('data.login.token: ', data.login.token)
            let token = data.login.token;
            let toSave = JSON.stringify({ email: formValues.email, token })
            window.localStorage.setItem(`${constants.APP_NAMESPACE}:user`, toSave);
            props.history.push({
                pathname: routes.DASHBOARD,
                state: { user: {email: formValues.email, token} }
            })
    
        }
        if (error) {
            console.log('error: ', error);
        }
    },[data])


    const onSubmit = (e) => {
        let formValues = {
            email: email.value, password: password.value
        }
        console.log('all: ', formValues)
        setFormValues(formValues)
        login({ variables: formValues });

    }

    return (
        <div className="y-signupform">
            <form>
                <fieldset>
                    <legend>
                        Sign in and write something awesome
                    </legend>

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
                    {loading ? (<p>... logging you in ...</p>) : (error ? error.message : '')}
                    <button type="button"
                        onClick={onSubmit}
                        className="btn btn-primary">Log in
                    </button>
                    <p>Not a member yet? <Link to={routes.SIGN_UP} >Sign up now</Link></p>
                </fieldset>
            </form>
        </div>
    )
}