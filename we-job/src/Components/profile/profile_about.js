import React, { useState } from "react";
import "./styles/profile_about.css";
import "./styles/sections.css";

function Profile_about(prop) {
  const info = prop.info;

  const aboutText = info.about

  const [editMode, setEditMode] = useState(false);

  const openEdit = () =>{
      if(editMode == true){
        setEditMode(false);
      }else{
        setEditMode(true);
      }
  }

  return (
    <div className="section">

      <div id="section_title">
        <h3>About</h3>
        <button onClick={openEdit}>
          {!editMode&&<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
            <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
          </svg>}

          {editMode&&<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)"></path><path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)"></path>
          </svg>}
        </button>
      </div>
      <div id="text">

        {!editMode && <p align="justify">
          {aboutText}
          <br />
        </p>}
        {editMode && <form action="/api/updateAbout" method="POST" id="about_form">
          <input name="user_id" type="text" value={info.id.toString()} hidden></input>
          <textarea name="text" defaultValue={aboutText} id="about_textarea" rows="18"/>
          
          <button type="submit">Save</button>


        </form>}


        
      </div>
    </div>
  );
}

export default Profile_about;
