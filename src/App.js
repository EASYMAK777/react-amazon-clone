
import React, { useEffect } from 'react'
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Checkout from './Components/Checkout/Checkout'
import { auth } from "./Components/Firebase/firebase"
import { useStateValue } from './Components/StateProvider/StateProvider'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      // will only run once when the app component loads...
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS ...', authUser);

        if (authUser) {
          //the user just logged in/ the user was logged in

          dispatch({
            type:'SET_USER',
            user: authUser
          })

        } else {
          // the user is logged out
          dispatchEvent({
            type:'SET_USER',
            user: null
          })
        }
      } )
  }, [])

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>

          <Route path="/checkout">
            
            <Checkout />
         
          </Route>

          <Route path="/login">
          <Navbar />
            <Login/>
          </Route>

          <Route path="/order-online">
          <Navbar />
            <h1>Order Online</h1>
          </Route>

          {/* This is the default route */}
          <Route path="/">
          <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
            

export default App;
            


        

        


      



