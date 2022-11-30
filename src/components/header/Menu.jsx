import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <>
        <ul>
          <li>
            <NavLink activeClassName to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink activeClassName to="/register">Register</NavLink>
          </li>
        </ul>
      </>
    );
};

export default Menu;
