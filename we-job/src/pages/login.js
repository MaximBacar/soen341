import "./login.css";
import React from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import Footer from "../Components/footer";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'  

function Login() {
  return (
    <div class="login_page">
      <header class="header">
        <div id="logo">
        <Link to="/" exact><img src={logo} /></Link>
        </div>
        <p class="login-subtitle">Login</p>
      </header>
      <div class="main_screen">
        <div class="photo-space">
          <img src={girl} />
        </div>
        <div class="login_box">
          <form action="/login" method="POST" id="login_form">
            <div class="space1"></div>
            <h1 class="login_title">Sign in</h1>
            <h2 class="message">Stay updated on your professional world </h2>
            <div class="space-between"></div>
            <div class="text_field">
              <input
                type="email"
                id="login_email"
                name="login_email"
                placeholder="Please enter email"
                required
              />
              <span></span>
            </div>
            <div class="space-between"></div>
            <div class="text-field">
              <input
                type="password"
                id="login_password"
                name="login_password"
                placeholder="Password"
                required
              />
              <span></span>
              <div class="space-between"></div>
              <a href="./" id="forgot_password">
                Forgot Password?
              </a>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <div class="space-between2"></div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
