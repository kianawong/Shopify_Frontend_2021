import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nominations from "./Nominations";
import Home from "./Home";

function Navbar(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/nominations">Nominations</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/nominations" component={Nominations}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}
export default Navbar;
