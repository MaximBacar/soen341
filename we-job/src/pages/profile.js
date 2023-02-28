import { Link } from "react-router-dom";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
import { useState } from "react";
import "./profile.css";
import Footer from "../Components/footer";

function Profile({ state }) {
  const [noUser, setnoUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [student, setStudent] = useState(true);

  switch (state) {
    case "student":
      setStudent(true);
      setEmployer(false);
      setnoUser(false);
    case "employer":
      setEmployer(true);
      setStudent(false);
      setnoUser(false);
    case "noUser":
      setnoUser(true);
      setEmployer(false);
      setStudent(false);
  }

  //we have to create a system where the profile will show the available profile if the user is signed in or not
  //the profile page will have three variation: employer, student, not signed in
  //the not signed in will be the easier of the three and will consist of only a message saying to sign in

  return (
    <div class="profilepage">
      <header className="header">
        <div id="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <h1>Profile</h1>
      </header>
      <div class="body">
        {noUser && (
          <div class="noUser">
            <div class="message1">
              Oops...Looks like you did not sign up yet!
            </div>
            <div class="message2">
              Log into your account now or create a new account!
            </div>
            <div class="links">
              <Link to="/login" class="login">
                Login
              </Link>
              <Link to="/signup" class="signup">
                Sign up
              </Link>
            </div>
          </div>
        )}
        {student && <div class="student">
          <div class="photo-section">
            <img src="/" alt="photo" id="profilepic"/>
          </div>
          <div class="content-section">
            <div class="personal-section">
              <div class="fname"></div>
            <div class="lname"></div>
            <div class="titel"></div>
            <div class="Age"></div>
            <div class="email"></div>
            </div>
            <div class="professional-section">
              <div class="education-section"> <div>
              <div class=""></div>
            </div>
          </div>
          </div>}
        {employer && <div></div>}
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
