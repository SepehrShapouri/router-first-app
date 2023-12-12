import React from "react";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <nav className="nav">
        <ul className="list">
          <li>
            <NavLink end to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="posts">posts</NavLink>
          </li>
          <li>
            <NavLink to="comments">comments</NavLink>
          </li>
          <li>
            <NavLink to="Login">login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppNav;
