
import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout/>
            
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            
            <h1>Login Page</h1>
          </Route>

          {/* This is the default route */}
          <Route path="/">
          
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
            

export default App;
            


        

        


      



