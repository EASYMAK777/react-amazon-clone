import React , { useState }from 'react'
import './Login.css'
import logo from "../img/blistlyfe-logo.jpg"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../Firebase/firebase"
import { ContactsOutlined } from '@material-ui/icons'


function Login() {

    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const signIn = e => {
        e.preventDefault()

        // firebase login function

        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e=> {
        e.preventDefault()

        // firebase registeration function
        
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //if user creation is successfull
            
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

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

                    <button 
                    type = "submit"
                    onClick={ signIn } 
                    className="login__signInButton">Sign-in</button>

                </form>
                    {/* <p>By signing-in you agree to Blistlyfe's Conditions of Use & Sale</p> */}

                    <button
                    onClick = { register }
                    type="submit" 
                    className="login__registerButton">Dont have an account?  Create your Blistlyfe account</button>



            </div>
        </div>
    )
}

export default Login
