import Homepage from "./pages/homepage";
import React from "react";
import "./App.css";
import FirstPage from "./pages/firstPage";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router> 

        {<Homepage />}
        {/*<FirstPage />*/}
        {/*<Login />*/}

    </Router>
  );
}

export default App;
