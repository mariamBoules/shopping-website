import React from "react";
import "../Pages/CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="yourmail@example.com" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-already">
          Already have an account ? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
