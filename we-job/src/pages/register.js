import "./styles/register.css";
import React, { useContext } from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import Footer from "../Components/footer";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'  
import Cookies from "js-cookie";
import Navbar from "../Components/navbar_connected";

function Register() {



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
      window.location.replace("/login");
    })
    .catch(error => {
      console.error(error);
    });



  }


  return (
    
    <div className="register_page">
        <div className="register_header">

        </div>  

        {/* <Navbar/> */}



        
        <div className="register_section">
            <h1 id="slogan">Achieve the career you deserve</h1>
            <div id="register_box">

                <form id="register_form">
                    <h3 id="register_titles">Email</h3>
                    <input type={"email"}  id="register_input"></input>
                    <h3 id="register_titles">First name</h3>
                    <input type="text"  id="register_input"></input>
                    <h3 id="register_titles">Last name</h3>
                    <input type="text"  id="register_input"></input>
                    <h3 id="register_titles">Password</h3>
                    <input type="password"  id="register_input"></input>
                    <h3 id="register_titles">Confirm Password</h3>
                    <input type="password"  id="register_input"></input>
                    <br></br>
                    <button>Register</button>
                </form>
            </div>
            <div id="error_box">
                <p>This email as already been used, register with a different email.</p>
            </div>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
        
        <div className="register_footer">

        </div>
    </div>
    
  );
}
export default Register;
