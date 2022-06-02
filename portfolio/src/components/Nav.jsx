import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Nav.css";

function Nav() {

  return (
    <nav className="nav-bg">
      <div className="nav-container">

        <div className="nav-links-container">
          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/stack">
              Tech Stack
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
