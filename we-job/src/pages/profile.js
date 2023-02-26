import { Link } from "react-router-dom";
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";

function Profile() {
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
