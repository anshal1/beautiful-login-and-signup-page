import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <>
      <div className="main_signup_container">
        <div className="msg">
            <h1>Sign up to continue</h1>
        </div>
        <br />
        <div className="inputs">
          <div className="input_box">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="input_box">
          <label htmlFor="name">Username</label>
            <input type="text" />
          </div>
          <div className="input_box">
          <label htmlFor="name">Email</label>
            <input type="text" />
          </div>
          <div className="input_box">
          <label htmlFor="name">Password</label>
            <input type="text" />
          </div>
        </div>
        <div className="buttons">
            <button className="btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
