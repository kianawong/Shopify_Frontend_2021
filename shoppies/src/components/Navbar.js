import React, { Component } from "react";
import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";
import Nominations from "./Nominations";
import Results from "./Results";
import Home from "./Home";

function Navbar(){
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/nominations">Nominations</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </nav>
      </div>

        <Route path="/" component={Home}/>
        <Route path="/nominations" component={Nominations}/>
        <Route path="/results" component={Results}/>
    </HashRouter>
  )
}
export default Navbar;
