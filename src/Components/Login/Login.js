import React from 'react'
import './Login.css'
import logo from "../img/blistlyfe-logo.jpg"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to ='/'>
                <img
                className="login__logo"
                src={ logo }
                />
            </Link>
            <h1>Login Page</h1>
        </div>
    )
}

export default Login
