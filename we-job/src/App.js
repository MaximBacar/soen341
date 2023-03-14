import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import React from "react";
import "./App.css";
import FirstPage from "./pages/firstPage";
import Feed from "./pages/feed"


import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (

      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/feed" element={<Feed/>}/>
     

      </Routes>

  );
}

export default App;
