import React, { useState } from "react";
import "./Login_SignUp.css";
import user_icon from "../Asset/person.png";
import email_icon from "../Asset/email.png";
import password_icon from "../Asset/password.png";

const Login_SignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className="container">
      <div className={darkMode ? "header dark" : "header"}>
        <div className="theme-toggle">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <div className="text">
          {" "}
          <i className="fa-solid fa-lock"></i> {action}
        </div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Enter your name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={showPassword == true ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Lost Password?<span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>

        <div className="footer">
          <p>Made with ❤️ using React</p>
          <span>© 2026 Sudhanshu</span>
        </div>
      </div>
    </div>
  );
};
export default Login_SignUp;
