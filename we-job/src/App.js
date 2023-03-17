import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import React, { createContext, useState, useEffect } from 'react';
import "./App.css";
import FirstPage from "./pages/firstPage";
import Feed from "./pages/feed"
import Cookies from "js-cookie";



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

  return (
    
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/dashboard" element={<Private Component={Dashboard} />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/feed" element={<Private Component={Feed} />}/>
      </Routes>

  

  );
}

export default App;
