import React, { Component } from "react";
import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";
import Nominations from "./Nominations";
import Results from "./Results";
import Home from "./Home";
import SingleMovieView from "./SingleMovieView";

function Navbar(){
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/nominations">Nominations</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>

        <Route path="/" component={Home}/>
        <Route path="/nominations" component={Nominations}/>
        <Route exact path="/results" component={Results}/>
        <Route path="/results/:movieTitle" component={SingleMovieView}/>
    </HashRouter>
  )
}
export default Navbar;
