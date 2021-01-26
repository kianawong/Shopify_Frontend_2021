import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nominations from "./Nominations";
import Results from "./Results";
import Home from "./Home";

function Navbar(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/nominations">Nominations</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/nominations" component={Nominations}/>
        <Route path="/results" component={Results}/>
      </Switch>
    </Router>
  )
}
export default Navbar;
