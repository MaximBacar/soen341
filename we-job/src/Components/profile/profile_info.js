import React from "react";
import "./styles/profile_info.css";

import { useState, useEffect } from "react";



function Profile_info(props) {


  const info = props.info;

  var banner_url = info.banner;
  if(banner_url == undefined){
    banner_url = "1.jpg";
  }


  const [editMode,setEditMode] = useState(false);


  function enableEdit(){
    setEditMode(!editMode);

    const element = document.getElementById("arrow");

    if(editMode == true){
      element.classList.add("rotate");
    }
    else{
      element.classList.remove("rotate");
    }
  }






  // const profile_img_div = document.getElementById("circle");
  // const profile_img_input = document.getElementById("profile_img_input");

  // function changePFP (){
  //   profile_img_input.click();
  // }

  // profile_img_input.addEventListener("change", function() {
  //   const file = profile_img_input.files[0];
  //   console.log(file);
  //   // Do something with the selected image file
  // });


  return (
    <div className="info">
      

      <div id="background_image">
        <img src={require("../../user-data/banner-pictures/".concat(banner_url))}/>
        <input type="file" accept="image/*" id="background_img_input" hidden></input>
      </div>

      <span id="circle" >
        <img src="https://img.icons8.com/ios/100/null/compact-camera.png"/>
        <input type="file" accept="image/*" id="profile_img_input" hidden></input>

      </span>

      <div id="info_text">
        <div id="personal_info">
          <h1>{info.first_name} {info.last_name}</h1>
          <p>Full time Computer Engineering student at Concordia University</p>
          <button id="cv_upload_btn">Upload CV</button>
        </div>
        <div onClick={enableEdit} id="contact">
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
