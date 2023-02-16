import React from "react";
import "./footer.css";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <h1 id="title">Find the perfect opportunity for you!</h1>
      <div id="container">
        <div class="footerCategories">
          <h1>About Us</h1>
          <a href="#">Aim</a>
          <a href="#">Vision</a>
          <a href="#">Testimonials</a>
        </div>
        <div class="footerCategories">
          <h1>Services</h1>
          <a href="#">Writing</a>
          <a href="#">Internships</a>
          <a href="#">Coding</a>
          <a href="#">Teaching</a>
        </div>
        <div class="footerCategories">
          <h1>Contact Us</h1>
          <a href="#">Uttar Pradesh</a>
          <a href="#">Ahemdabad</a>
          <a href="#">Indore</a>
          <a href="#">Mumbai</a>
        </div>
        <div class="footerCategories">
          <h1>Social Media</h1>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
