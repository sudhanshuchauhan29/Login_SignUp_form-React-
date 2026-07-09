import React, { useState } from "react";
import "./Login_SignUp.css";
import user_icon from "../Asset/person.png";
import email_icon from "../Asset/email.png";
import password_icon from "../Asset/password.png";

const Login_SignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [darkMode, setDarkMode] = useState(false);
  //controling input field using useStates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRememberMe(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setError("");
    setSuccess("");
  };

  const handleSubmit = () => {
    setError("");
    setSuccess("");

    if (action === "Sign Up" && name.trim() === "") {
      setError("Name is required.");
      return;
    }

    if (email.trim() === "") {
      setError("Email is required.");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (action === "Sign Up" && confirmPassword.trim() === "") {
      setError("Confirm Password is required.");
      return;
    }

    if (action === "Sign Up" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (action === "Sign Up") {
      setSuccess("Account Created Successfully 🎉");
    } else {
      setSuccess("Login Successful 🎉");
    }
    resetForm();
  };

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
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                  setSuccess("");
                }}
              />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setSuccess("");
              }}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
                setSuccess("");
              }}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <div className="remember">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <label htmlFor="remember">Remember Me</label>
          </div>
          {action === "Sign Up" && (
            <div className="input">
              <img src={password_icon} alt="" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  etError("");
                  setSuccess("");
                }}
              />

              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          )}
        </div>
        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Lost Password?<span>Click Here!</span>
          </div>
        )}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!email || !password}
        >
          {action === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="switch-form">
          {action === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setAction("Login");
                  resetForm();
                }}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setAction("Sign Up");
                  resetForm();
                }}
              >
                Sign Up
              </span>
            </p>
          )}
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
