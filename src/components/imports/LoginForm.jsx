import React from 'react'
import ErrorAlter from './ErrorAlter';
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function LoginForm(props) {

    let { handleSubmit, setEmail, setPassword, errorMessage, setError } = props.loginState;
    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active"

    const register = () => history.push("/register")
    const login = () => history.push("/login")

    return (
        <div className="col-sm-6  bg-color align-self-center">
        <div className="info">
            <div className="btn-section">
                <button onClick={register} className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Register</button>
            </div>
            <div className="btn-section-l">
                <button onClick={login} className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</button>
            </div>
        </div>
        <div className="form-section">
            <div className="title-l">
            <h1>DESIGN. DEVELOP. DEPLOY.</h1>
            <h5>We make it work</h5>
                <h3>SIGN INTO YOUR ACCOUNT.</h3>
            </div>
            <div className="login-inner-form">
                <form method="POST" onSubmit={handleSubmit}>

                    <div className="form-group form-box">
                        <input type="text" id="email" onChange={e => setEmail(e.target.value)} className="input-text" placeholder="Email Address" />
                        <i className="icon email"></i>
                    </div>

                    <div className="form-group form-box">
                        <input type="text" id="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Password" />
                        <i className="icon lock"></i>
                    </div>

                    {
                        errorMessage && <ErrorAlter errorMessage={errorMessage} clearError={() => setError(undefined) }></ErrorAlter>
                    }

                    <div className="form-group">
                        <button className="btn primary-btn">Login</button>
                    </div>

                </form>
                </div>
                </div>
        </div>
    )
}
