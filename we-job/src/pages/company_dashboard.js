import Navbar from "../Components/navbar";
import React, { useContext } from 'react';



import "./styles/company_dashboard.css";
import application_svg from "../Components/photo/undraw_resume_re_hkth.svg";
import posting_svg from "../Components/photo/undraw_feeling_proud_qne1.svg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";



function C_Dashboard() {

  //  List of jobs

  const jwt_token = Cookies.get("auth_token"); 
  
  

  return (
    <div className="comp_dashboard">

      <div className="c_menu">



        <button id="c_menu_btn">
          <img src="https://img.icons8.com/windows/96/null/speed.png"/>
          <h4>Dashboard</h4>
        </button>
        <button id="c_menu_btn">
          <img src="https://img.icons8.com/windows/96/null/chat-message.png"/>
          <h4>Messages</h4>
        </button>
        <button id="c_menu_btn">
          <img src="https://img.icons8.com/windows/96/null/exit.png"/>
          <h4>Logout</h4>
        </button>

      </div>
      
      <div className="c_dash_body">

        <div className="c_dash_holder">

          <div id="c_dash_info">

            <div id="company_info">
              <div id="company_images">
                <div id="c_banner">
                  <img src="https://media.licdn.com/dms/image/D4E3DAQFUH9iaPLWAsg/image-scale_191_1128/0/1662841560795?e=1680814800&v=beta&t=ovc0Ca_ibZ1Qqd2ZM-oXqHe9Uz_3Ycw0CJ4g1f25iXk"/>
                </div>
                <div id="c_pfp">
                  <img src="https://media.licdn.com/dms/image/C4E0BAQErbeFLWe3JVA/company-logo_200_200/0/1662841594746?e=1687996800&v=beta&t=FKYEs4kUMVDdrTJwSztYy_pdcRXDP-Us5jxca9_8QMI"/>
                </div>
              </div>
              <div id="c_info_holder">
                <h1>Ubisoft</h1>
                <p>
                  Ubisoft’s 21,000 team members, working across more than 30 countries around the world, are bound by a common mission to enrich players’ lives with original and memorable gaming experiences.
                </p>
              </div>
            </div>

            <div id="company_stats">

              <div id="top">
                <div id="c_s_applications">
                  <div id="c_s_left">
                    
                    <h3>Total Applications</h3>
                    <h2>3,450</h2>
                  </div>
                  <div id="c_s_right">
                    <img src={application_svg} alt="application logo"/>
                  </div>
                </div>
                <div id="c_s_postings">
                  <div id="c_s_left">
                    
                    <h3>Postings</h3>
                    <h2>523</h2>
                  </div>
                  <div id="c_s_right">
                    <img src={posting_svg} alt="application logo"/>
                  </div>
                </div>
              </div>
              <div id="bottom">

              </div>
            </div>
            
          </div>

          <div id="c_dash_postings">
            <h2>Job Postings</h2>
            <div id="postings">
              <div id="posting_tags">
                <h4>Job name</h4>
                <h4>Location</h4>
                <h4>Salary</h4>
                <h4>Date posted</h4>
                <h4>Applications</h4>
                <h4>   </h4>
              </div>
              <div id="jobs">
                <div id="job">
                  <div id="elements">
                    <h4>Software developper</h4>
                    <h4>Montreal, CA</h4>
                    <h4>94,000$</h4>
                    <h4>02/03/2023</h4>
                    <h4>500</h4>
                    <button>Go</button>
                  </div>
                  <span id="line"></span>
                </div>

                <div id="job">
                  <div id="elements">
                    <h4>Game designer</h4>
                    <h4>Montreal, CA</h4>
                    <h4>54,000$</h4>
                    <h4>02/03/2023</h4>
                    <h4>140</h4>
                    <button>Go</button>
                  </div>
                  <span id="line"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  );
}
export default C_Dashboard;
