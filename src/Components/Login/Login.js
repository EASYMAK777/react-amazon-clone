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

            <div className="login__container">
                <h1>Login </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                </form>

            </div>
        </div>
    )
}

export default Login
