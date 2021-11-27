import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function BaseLogin() {

    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active"

    const register = () => history.push("/register")
    const login = () => history.push("/login")


    return (
        <div className="col-sm-6 bg-img align-self-right">
            {/*<div className="form-section">
            <div className="title">
            <h1>DESIGN. DEVELOP. DEPLOY.</h1>
            <h5>We make it work</h5>
            </div>
    </div>*/}
            <div className="info">
                <div className="btn-section">
                    <button onClick={register} className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Register</button>
                </div>
                <div className="btn-section-l">
                    <button onClick={login} className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</button>
                </div>
            </div>
        </div>
    )
}
