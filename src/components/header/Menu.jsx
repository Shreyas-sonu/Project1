import React from "react";
import { NavLink } from "react-router-dom";
import {FaPowerOff} from "react-icons/fa"

const Menu = () => {
  let token = window.sessionStorage.getItem("token");
  let logout = () => {
    window.sessionStorage.clear();
    window.location.assign("/");
  }
    return (
      <>
        {token === "111" ? (
          <>
            <ul>
              <li>
                <NavLink activeclassname="true" to="/quiz">
                  Quizz
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="true" to="/info">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink  activeclassname="true" to="/lll">
                  <span onClick={logout}><FaPowerOff/></span>
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>
                <NavLink activeclassname="true" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="true" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </>
    );
};

export default Menu;
