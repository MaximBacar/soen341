import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import React, { createContext, useState, useEffect } from 'react';
import "./App.css";
import Homepage from "./pages/homepage";
import Feed from "./pages/feed"
import Cookies from "js-cookie";
import C_Dashboard from "./pages/company_dashboard";

import C_Login from "./pages/company_login";



import { BrowserRouter, Router, Routes, Route, Link, Navigate, Switch } from "react-router-dom";

function App() {

  function isAuthenticated() {
    const token = Cookies.get("auth_token");

    console.log("token", token);

    if (token !== null && token !== undefined){

      return true;
    }
    return false;

    
    
  }


  const Private = ({Component}) => {
    const auth = isAuthenticated(); //your logic

    return auth ? <Component /> : <Navigate to="/login" />
  }

  const AnonymousOnly = ({Component}) => {
    const auth = isAuthenticated(); //your logic

    return !auth ? <Component /> : <Navigate to="/dashboard" />
  }



  return (
    
      <Routes>
        <Route path="/" element={<AnonymousOnly Component={Homepage} />} />
        <Route path="/dashboard" element={<Private Component={Dashboard} />} />
        <Route path="/Login" element={<AnonymousOnly Component={Login} />} />
        <Route path="/Register" element={<AnonymousOnly Component={Register} />} />
        <Route path="/feed" element={<Private Component={Feed} />}/>
        <Route path="/c_dash" element={<C_Dashboard/>}/>

        {/* <Route path="/c_login" element={<C_Login/>}/> */}

      </Routes>

  

  );
}

export default App;
