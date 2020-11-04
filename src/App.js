
import React from 'react'
import './App.css';
import Header from "./Components/Navbar/Navbar"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          {/* This is the default route */}
          <Route path="/">
            <Header />
            <h1>HOME PAGE!!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
            

export default App;


        

        


      



