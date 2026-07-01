import React, { useState } from "react";
import './Login_SignUp.css'
import user_icon from '../Asset/person.png'
import email_icon from '../Asset/email.png'
import password_icon from '../Asset/password.png'

const Login_SignUp = () =>{
    const [action,setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action=="LogIn"?<div></div>:<div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" />
                    </div>}
                    
                     <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" />
                    </div>
                     <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" />
                    </div>
                </div>
                {action=="Sign Up"?<div></div>: <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
               
                <div className="submit-container">
                    <div className={action=="LogIn"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
                    <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("LogIn")}} >LogIn</div>
                </div>
            </div>

        </div>
    )
}
export default Login_SignUp;