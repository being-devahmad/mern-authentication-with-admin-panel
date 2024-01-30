import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login Form</h1>
            <form className="row g-3 m-4 border border-3 p-4">
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
              <div className="col-12">
                <NavLink
                  to="/signup"
                  type="submit"
                  className="btn btn-danger p-2"
                >
                  Create new account
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
