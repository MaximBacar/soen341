import "./styles/company_login.css";
import React, { useContext } from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'  
import Cookies from "js-cookie";

function C_Login() {



  // function handleSubmit(event){
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData.entries());

  //   fetch('/api/auth', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(response => response.json())
  //   .then(data => {

  //     Cookies.set("auth_token", data.token);
  //     window.location.replace("/dashboard");
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }


  return (
    <div className="c_login_page">


      <div className="c_login_body">

        <div id="login_box">
          <div id="logo">
            <h1>weJOB.</h1>
            <h2>Entreprise</h2>
          </div>
          <div id="login_form">
            <h3>Email</h3>
            <input type="email"/>
            <h3>Password</h3>
            <input type="password"/>
            <button>Login</button>
          </div>
          <div id="login_info">
            <p>Looking for a job? <a href="/login">Login here</a></p>
          </div>
        </div>

      </div>
      
    </div>
    
  );
}
export default C_Login;
