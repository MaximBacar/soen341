import "./styles/upload.css";
import React, { useContext } from "react";
import Cookies from "js-cookie";

function Upload() {



  return (
    <div className="upload_cv">

        <h1>Upload CV</h1>

        
        <div id="upload_zone">
            <input type="file" id="upload_input"/>
        </div>

        
        <div id="input_space" className="about">
            <h2>About</h2>
            <textarea id="input_area"></textarea>
        </div>
        
        <div id="input_space" className="experience">
            <h2>Experience</h2>
            <textarea id="input_area"></textarea>
        </div>
        
        <div id="input_space" className="education">
            <h2>Education</h2>
            <textarea id="input_area"></textarea>
        </div>
      
    </div>
    
  );
}
export default Upload;
