import "./styles/login.css";
import React, { useContext } from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'  
import Cookies from "js-cookie";

function Login() {



  function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

      Cookies.set("auth_token", data.token);
      window.location.replace("/dashboard");
    })
    .catch(error => {
      console.error(error);
    });



  }


  return (
    <div className="login_page">
      <div>
        <Navbar/>
      </div>
      <div className="main_screen">
        <div className="photo-space">
          <img src={girl} />
        </div>
        <div className="login_box">

          <form onSubmit={handleSubmit} method="POST" id="login_form">
            <div className="space1"></div>
            <h1 className="login_title">Sign in</h1>
            
            <h2 className="message">Stay updated on your professional world </h2>
            <div className="space-between"></div>
            <div className="text_field">
              <input type="email" id="email" name="email" placeholder="Please enter email" required/>
              <span></span>
            </div>
            <div className="space-between"></div>
            <div className="text-field">
              <input type="password" id="password" name="password" placeholder="Password" required/>
              <span></span>
              <div className="space-between"></div>
              <a href="./" id="forgot_password">
                Forgot Password?
              </a>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <div className="space-between2"></div>
      </div>
      <Footer />
    </div>
    
  );
}
export default Login;
