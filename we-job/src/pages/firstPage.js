import React from "react";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import "./firstPage.css";
import Footer from "../Components/footer";
import girl from "../Components/photo/undraw_Exams_re_4ios (1).png";

function firstPage() {
  return (
    <div id="firstPContainer">
      <div id="logo">
        <img src={logo} />
      </div>
      <div id="firstPageBtn">
        <a class="firstPageLink" href="/">
          Log in
        </a>
        <a class="firstPageLink" href="/">
          Sign Up
        </a>
      </div>
      <div id="img">
        <img id="girl" src={girl} />
      </div>
      <div id="description"></div>
      <Footer />
    </div>
  );
}
export default firstPage;
