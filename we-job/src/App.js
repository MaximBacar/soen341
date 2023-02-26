import Homepage from "./pages/homepage";
import Login from "./pages/login";
import React from "react";
import "./App.css";
import FirstPage from "./pages/firstPage";
import Profile from "./pages/profile"; 

import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="Profile" element={<Profile />} />

      </Routes>

  );
}

export default App;
