import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

function Navbar(){
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/nominations">Nominations</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
  )
}
export default Navbar;
