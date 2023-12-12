import React from "react";
import "./App.css";
import AppNav from "./Components/AppNav";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import Payment from "./Pages/Payment";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Post from "./Components/Post";
import Posts from "./Pages/Posts";
import Comment from "./Components/Comment";
import Comments from "./Components/Comments";
import Login from "./Pages/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="dashboard"/>}/>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="payments" element={<Payment />} />
            <Route path="products/:id" element={<Product/>}/>
            <Route path="products" element={<Products/>}/>
          </Route>
          <Route path="posts/:id" element={<Post/>}/>
          <Route path="posts" element={<Posts/>}/>
          <Route path="settings" element={<Settings />} />
          <Route path="comments/:id" element={<Comment/>}/>
          <Route path="comments" element={<Comments/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
