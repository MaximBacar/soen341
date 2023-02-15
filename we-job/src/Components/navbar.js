import React, {useState} from 'react'
import mario from './photo/mario.png'



function Navbar() {

  
    return(
        <nav class="navbar">
          <div class="navbar_container">
            <a href="/" id="navbar_logo"></a>
            <div class="navbar_toggle" id="menu"></div>
            <span class="box"></span>
            <span class="box"></span>
            <span class="box"></span>
          </div>
          <ul class="navbar_menu">
            <li class="navbar_item">
              <a href="/" class="navbar_links">Home</a>
            </li>
          </ul>

        </nav>
    );
    
}
export default Navbar; 