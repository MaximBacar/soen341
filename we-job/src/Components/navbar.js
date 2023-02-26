import React, { useState } from "react";
import mario from "./photo/mario.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar_container">
        <Link to="/" exact id="navbar_logo">
          We-Job
        </Link>
        <div class="navbar_toggle" id="menu"></div>
        <span class="box"></span>
        <span class="box"></span>
        <span class="box"></span>
      </div>
      <ul class="navbar_menu">
        <div class="links">
          <li class="navbar_item">
            <Link to="/profile" class="navbar_links">
              Profile
            </Link>
          </li>
          <li class="navbar_item">
            <Link to="/joboffer"  class="navbar_links">
              Job Offer
            </Link>
          </li>
          <li class="navbar_item">
            <Link to="/message"  class="navbar_links">
              Messages
            </Link>
          </li>
        </div>
        <div class="search-bar">
          <li class="navbar_item" id="searchbar">
            <input type="text" placeholder="Search..." />
          </li>
        </div>
        <div class="signup-login">
          <li class="navbar_btn">
            <Link to="/login" exact class="button">
              Log in
            </Link>
          </li>
          <li class="navbar_btn">
            <Link to="/signup" class="button">
              Sign Up
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
