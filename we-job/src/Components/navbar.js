import React, { useState, useEffect } from "react";
import Navbar_Con from "./navbar_connected";
import Navbar_ano from "./navbar_anonymous";
import Cookies from "js-cookie";

function Navbar() {


  const [displayed_nav, setDisplayed] = useState(<Navbar_ano/>);

  useEffect(() => {
    console.log("a", Cookies.get('auth_token'));
    if (Cookies.get('auth_token') == undefined || Cookies.get('auth_token') == null) {
      setDisplayed(<Navbar_ano />);
    } else {
      setDisplayed(<Navbar_Con />);
    }
  }, [Cookies]);

  return (
    <div>

      {displayed_nav}

    </div>
  );
}
export default Navbar;
