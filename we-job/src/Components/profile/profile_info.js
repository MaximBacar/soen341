import React from "react";
import "./styles/profile_info.css";

function profile_info() {
  return (
    <div className="info">
      <h1>Maxim Bacar</h1>
      <span id="circle"></span>
      <div id="contact">
        <div id="email">
            <p>maximbacar@hotmail.ca</p>
        </div>

        <div id="phone">
            <p>5141234567</p>
        </div>

        <div id="location">
            <p>Montreal, QC</p>
        </div>
      </div>
    </div>
  );
}

export default profile_info;
