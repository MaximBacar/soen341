import "./login.css"
import React from 'react' 
import logo from "../Components/photo/wejob-low-resolution-logo-color-on-transparent-background.png";
/** implemented log in page as isolated page without any footer */ 

function Login() {
    return(
        <div class="login_page"> 
            <header class="header">
                <div id="logo">
                    <img src={logo} />
                </div>
                <p class="login-subtitle">Login</p>
            </header>
            <div class="main_screen">
                <div class="photo-space">
                    this is a photo spaceee
                </div>
                <div class="login_box">
                    <form action = "/login" method="POST" id="login_form">

                    <h1 class="login_title">Login</h1>
                    <p id="login_slogan">EMAIL</p>

                    <div class="text-field">
                        <input type="email" id="login_email" name="login_email" placeholder="Please enter email" required/> 
                        <span></span>
                    </div>
                    <div class="text-field">
                        <input type="password" id="login_password" name="login_password" placeholder="Password" required/>
                        <span></span>
                        
                        <a href="./" id="forgot_password">Forgot Password?</a>
                        <button type="submit">Login</button>


                    
                    </div>
                    </form>
                </div>

            </div>

        </div>
        

    );

} export default Login; 