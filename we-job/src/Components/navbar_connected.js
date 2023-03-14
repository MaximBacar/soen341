
import {FaBars, FaTimes} from "react-icons/fa";
import {useState, useEffect, useRef} from "react";

import "./navbar_connected.css";

/**
 * Navbar when the user is connected
 * @returns 
 */
function Navbar() {

    
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    const openMenu = () => {
        setVisible(true);
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


   

  return (
    <div className="navbar_connected">
         <div className="navbar">
            <h1>weJOB.</h1>
            <div id="menu">
                
                <nav>
                    <button onClick={openMenu}>
                        <img src="https://img.icons8.com/windows/96/null/gender-neutral-user.png"/>
                    </button>
                    <button>
                        <img src="https://img.icons8.com/windows/96/null/chat-message.png"/>
                    </button>
                </nav>
            </div>
            
        </div> 
        
        {visible && <div ref={ref} className="profile_menu">
            <h4>maximbacar@hotmail.ca</h4>
            <button>My Account</button>
            <button>My Jobs</button>
            <button>Messages</button>
            <button>Settings</button>
            <button id="logout">Logout</button>
        </div>}
    </div>

    
  );
}
export default Navbar;
