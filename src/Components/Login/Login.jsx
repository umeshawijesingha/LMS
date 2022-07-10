import React from "react";
import "./Login.css";
import { FaBeer } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
  return (
    <div id="loginForm">
      <div className="card" id="loginContent">
        {" "}
        <h3 className="loginTitle">Access to the platform</h3>
        <label className="loginLabel">Username</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <MdEmail />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <label className="loginLabel">Password</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <MdEmail />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </div>

   
    <button className="btn btn-primary" id="loginBtn">Log in</button>
    <p>Forgotten your username or password?</p>
       

       
      </div>
    </div>
  );
};

export default Login;
