import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

import "./navbar_connected.css";

/**
 * Navbar when the user is connected
 * @returns 
 */
function Navbar() {

    const navRef = useRef();

    //  Function to display or not the nav bar
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <div className="navbar_connected">
         <div className="navbar">
            <h1>weJOB.</h1>
            <div id="menu">
                
                <nav ref={navRef}>
                    <a href="/profile">
                        <img src="https://img.icons8.com/windows/96/null/gender-neutral-user.png"/>
                    </a>
                    <a href="/messages">
                        <img src="https://img.icons8.com/windows/96/null/chat-message.png"/>
                    </a>
                </nav>
            </div>
            
        </div> 
        
    </div>
  );
}
export default Navbar;
