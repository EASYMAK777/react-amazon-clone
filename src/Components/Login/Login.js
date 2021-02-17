import React , { useState }from 'react'
import './Login.css'
import logo from "../img/blistlyfe-logo.jpg"
import { Link } from "react-router-dom"


function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
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
                    <input type='text' value = { email } 
                     onChange= {e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' value = { password }
                     onChange = { e=> setPassword(e.target.value)}
                    />

                    <button onClick={ signin } 
                    className="login__signInButton">Sign-in</button>

                </form>
                    {/* <p>By signing-in you agree to Blistlyfe's Conditions of Use & Sale</p> */}

                    <button className="login__registerButton">Dont have an account?  Create your Blistlyfe account</button>



            </div>
        </div>
    )
}

export default Login
