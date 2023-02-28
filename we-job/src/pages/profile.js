import { Link } from "react-router-dom";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";

function Profile() {
  //we have to create a system where the profile will show the available profile if the user is signed in or not
  //the profile page will have three variation: employer, student, not signed in
  //the not signed in will be the easier of the three and will consist of only a message saying to sign in

  const profilestate = ""; 

  return (
    <div class="profilepage">
      <header class="header">
        <div id="logo">
          <Link to="/" exact>
            <img src={logo} />
          </Link>
        </div>
      </header>

    </div>
  );
}
export default Profile;
