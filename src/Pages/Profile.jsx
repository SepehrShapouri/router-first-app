import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation, Navigate } from "react-router-dom";
function Profile() {
  const state = useLocation()
  console.log(state);
  return (
    <div>
      <h1>Profile section</h1>
      <div className="profielNavLinksContainer">
        <NavLink to="dashboard" className="profileNavLinks">
          Dashboard
        </NavLink>
        <NavLink to="Payments" className="profileNavLinks">
          Payment
        </NavLink>
        <NavLink to="products" className="profileNavLinks">
          Products
        </NavLink>
      </div>
      <Outlet />
      <span style={{ display: "block" }}>
        If you want to make any changes you can do that through{" "}
        <Link to="/settings">Settings</Link>
      </span>
    </div>
  );
}

export default Profile;
