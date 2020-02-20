import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="index.html">
          <i className="fas fa-users"></i> InHouse PD
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="!#">Team Members</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
