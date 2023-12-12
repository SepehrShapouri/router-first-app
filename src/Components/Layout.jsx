import React from "react";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
