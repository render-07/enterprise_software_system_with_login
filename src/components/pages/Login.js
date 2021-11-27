import React, { useState } from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';

import { useDispatch, useStore } from 'react-redux';
import { loginAction  } from '../../container/actions'
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")

    const dispatch = useDispatch()
    const store = useStore()
    const history = useHistory()

    // handle Submit handler function
    const handleSubmit = (event) =>{
        event.preventDefault();

        const userCredential = {
            email,
            password
        }
        // const userdata = { email: "dmin@gmail.com", password : "admin123"}
        const login = dispatch(loginAction(userCredential))
        login
            .then(data => history.push('/'))
            .catch(error => setError(error.err))

        // console.log(store.getState())
        // console.log(userCredential);
    }

    return (
        <>
        <div className="header"></div>
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <LoginForm loginState={{handleSubmit, setEmail, setPassword, errorMessage, setError}} />
                    <BaseLogin />
                </div>
            </div>
      </div>
      </>
    )
}
