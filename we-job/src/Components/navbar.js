import React, {useState} from 'react'
import mario from './photo/mario.png'



function Navbar() {

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(true); 

  const handleclickAppear = () => {
  setVisible(true); 
  setVisible1(false); 
  };

  const handleclickExit = () => {
    setVisible(false); 
    setVisible1(true); 
  }
  
    
    return(
        <div id="return-parent">
        {visible1 && (<button id="mario" onClick={handleclickAppear}> <img src={mario} alt="mario" class="mario" /> </button>
        )}
        
        

        {visible && (
        <div class="navbar" id="navbar">
        <div class="title">Navbar</div>
        <div class="smallbox" id="box1"> Home </div>
        <div class="smallbox" id="box2"> Search </div>
        <div class="smallbox" id="box3"> Create Account</div>
        <button id="buttonExit" onClick={handleclickExit}> EXIT </button>
      </div>)}
        
      </div>
    );
    
}
export default Navbar; 