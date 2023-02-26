import Homepage from "./pages/homepage";
import React from "react";
import "./App.css";
import FirstPage from "./pages/firstPage";
import Login from "./pages/login";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login/>} />
        
      </Routes>

  );
}

export default App;
