
import {FaBars, FaTimes} from "react-icons/fa";
import {useState, useEffect, useRef} from "react";
import Cookies from "js-cookie";

import "./navbar_connected.css";

/**
 * Navbar when the user is connected
 * @returns 
 */
function Navbar_Con() {

    
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    const openMenu = () => {
        setVisible(true);
    }

    const logout = () => {
      Cookies.remove("auth_token");
      window.location.replace('/');
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


      function toProfile(){
        window.location.replace("/dashboard");
      }

      function toJobs(){
        window.location.replace("/feed");
      }

   

  return (
    <div className="navbar_connected">
         <div className="navbar">
            <h1 onClick={toJobs}>weJOB.</h1>
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
            <button onClick={toProfile}>My Account</button>
            <button onClick={toJobs}>My Jobs</button>
            <button>Messages</button>
            <button>Settings</button>
            <button onClick={logout} id="logout">Logout</button>
        </div>}
    </div>

    
  );
}
export default Navbar_Con;
