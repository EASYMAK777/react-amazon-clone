
import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar/navbar"
import Home from './Components/Home/Home'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/checkout">
            <Navbar />
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <Navbar />
            <h1>Login Page</h1>
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
            


        

        


      



