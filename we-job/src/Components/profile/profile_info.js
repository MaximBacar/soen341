import React from "react";
import "./styles/profile_info.css";

function profile_info() {
  return (
    <div className="info">

      <div id="background_image">
        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
      </div>

      <span id="circle">
        <img src="https://img.icons8.com/ios/100/null/compact-camera.png"/>
      </span>

      <div id="info_text">
        <div id="personal_info">
          <h1>Maxim Bacar</h1>
          <p>Full time Computer Engineering student at Concordia University</p>
        </div>
        <div id="contact">
          <div id="personal_info_text">
              <div id="info_element">
              <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/null/external-email-business-management-kmg-design-glyph-kmg-design.png"/>
                  <p>maximbacar@hotmail.ca</p>
              </div>

              <div id="info_element">
                  <img src="https://img.icons8.com/material-outlined/96/null/phone.png"/>
                  <p>5141234567</p>
              </div>

              <div id="info_element">
              <img src="https://img.icons8.com/material-rounded/96/null/marker.png"/>
                  <p>Montreal, QC</p>
              </div>
          </div>

          <div id="arrow">
          <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/100/null/external-right-arrows-inkubators-detailed-outline-inkubators.png"/>
          </div>
        </div>
      </div>
      
 
    </div>
  );
}

export default profile_info;
