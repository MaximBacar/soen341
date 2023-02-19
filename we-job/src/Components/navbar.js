import React, { useState } from "react";
import mario from "./photo/mario.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar_container">
        <a href="/" id="navbar_logo">
          We-Job
        </a>
        <div class="navbar_toggle" id="menu"></div>
        <span class="box"></span>
        <span class="box"></span>
        <span class="box"></span>
      </div>
      <ul class="navbar_menu">
        <div class="links">
          <li class="navbar_item">
            <a href="/" class="navbar_links">
              Profile
            </a>
          </li>
          <li class="navbar_item">
            <a href="/" class="navbar_links">
              Job Offer
            </a>
          </li>
          <li class="navbar_item">
            <a href="/" class="navbar_links">
              Messages
            </a>
          </li>
        </div>
        <div class="search-bar">
          <li class="navbar_item" id="searchbar">
            <input type="text" placeholder="Search..." />
          </li>
        </div>
        <div class="signup-login">
          <li class="navbar_btn">
            <a href="/" class="button">
              Log in
            </a>
          </li>
          <li class="navbar_btn">
            <a href="/" class="button">
              Sign Up
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
