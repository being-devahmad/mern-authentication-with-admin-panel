import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = `http://localhost:4000/api/auth/login`;

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLC } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginUser);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("response from server login", res_data);
        // store the token in local host
        storeTokenInLC(res_data.token);
        alert("Login successful");
        setLoginUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        const errorData = await response.json(); // assuming server sends error details in JSON format
        alert(`Login failed: ${errorData.message}`);
      }

      console.log("login response", response);
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login Form</h1>
            <form
              className="row g-3 m-4 border border-3 p-4"
              onSubmit={handleSubmit}
            >
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleInput}
                  value={loginUser.email}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                  onChange={handleInput}
                  value={loginUser.password}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
            </form>
            <div className="col-12">
              <NavLink
                to="/signup"
                type="submit"
                className="btn btn-danger p-2"
              >
                Create new account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
