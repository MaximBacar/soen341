
import {FaBars, FaTimes} from "react-icons/fa";
import {useState, useEffect, useRef} from "react";
import Cookies from "js-cookie";

import "./navbar_anonymous.css";

/**
 * Navbar when the user is connected
 * @returns 
 */
function Navbar_ano() {

    


      function toHome(){
        window.location.replace("/");
      }
      function toLogin(){
        window.location.replace("/login");
      }

      function toRegister(){
        window.location.replace("/register");
      }

   

  return (
    <div className="navbar_disconnected">
         <div className="navbar_d">
            <h1 onClick={toHome}>weJOB.</h1>
            <div id="menu_d">
                <nav>
                    <button onClick={toRegister}>
                        Register
                    </button>
                    <button onClick={toLogin} id="login_btn">
                        Login
                    </button>
                </nav>
            </div>
            
        </div> 
        
    </div>

    
  );
}
export default Navbar_ano;
