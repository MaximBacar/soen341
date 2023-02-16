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
          <a class="footerLink" href="#">
            Aim
          </a>
          <a class="footerLink" href="#">
            Vision
          </a>
          <a class="footerLink" href="#">
            Testimonials
          </a>
        </div>
        <div class="footerCategories">
          <h1>Services</h1>
          <a class="footerLink" href="#">
            Writing
          </a>
          <a class="footerLink" href="#">
            Internships
          </a>
          <a class="footerLink" href="#">
            Coding
          </a>
          <a class="footerLink" href="#">
            Teaching
          </a>
        </div>
        <div class="footerCategories">
          <h1>Contact Us</h1>
          <a class="footerLink" href="#">
            Uttar Pradesh
          </a>
          <a class="footerLink" href="#">
            Ahemdabad
          </a>
          <a class="footerLink" href="#">
            Indore
          </a>
          <a class="footerLink" href="#">
            Mumbai
          </a>
        </div>
        <div class="footerCategories">
          <h1>Social Media</h1>
          <a class="footerLink" href="#">
            Facebook
          </a>
          <a class="footerLink" href="#">
            Youtube
          </a>
          <a class="footerLink" href="#">
            Instagram
          </a>
          <a class="footerLink" href="#">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
