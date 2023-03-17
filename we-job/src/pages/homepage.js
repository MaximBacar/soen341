import React from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import "./styles/homepage.css";
import Navbar from "../Components/navbar";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";

function homepage() {
  return (
    <div className="homepage">

        <div>
            <Navbar/>
        </div>

        <div className="homepage_body">
            <div id="right">
                <h1>Connect with colleagues and potential employers to achieve the dream career you deserve.</h1>
            </div>
            <div id="left">
                <img src={girl}/>
            </div>
        </div>
        
      
    </div>
  );
}
export default homepage;
