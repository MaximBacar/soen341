import React from "react";
import "./styles/profile_info.css";

import { useState, useEffect } from "react";



function Profile_info(props) {


  const info = props.info;

  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/user")
  //   .then(response => response.json()).then(json => {
  //     console.log(json)
  //     if (json.length != 0){
        
  //       setInfo(json); 
  //     }
  //   }).catch(e => {
  //     console.log("e", e)
  //   })
  // },[]) 

  // console.log(info);

  const profilePicMenu = () => {

  }

  return (
    <div className="info">
      

      <div id="background_image">

        <img src={require("../../user-data/banner-pictures/1.jpg")}/>
      </div>

      <span id="circle" onClick={profilePicMenu}>
        <img src="https://img.icons8.com/ios/100/null/compact-camera.png"/>
      </span>

      <div id="info_text">
        <div id="personal_info">
          <h1>{info.first_name} {info.last_name}</h1>
          <p>Full time Computer Engineering student at Concordia University</p>
        </div>
        <div id="contact">
          <div id="personal_info_text">
              <div id="info_element">
              <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/null/external-email-business-management-kmg-design-glyph-kmg-design.png"/>
                  <p>{info.email}</p>
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

export default Profile_info;
