import React from "react";
import "../SignUp/SignUp.css"
const Login = () => {
  return (
    <>
      <div className="main_signup_container">
        <div className="msg">
          <h1>Login to continue</h1>
        </div>
        <br />
        <div className="inputs">
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
          <button className="btn">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
