import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { storeTokenInLC } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("response from server login", res_data);
        // store the token in local host
        storeTokenInLC(res_data.token);
        alert("Regsteration successful");

        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Registration Form</h1>
            <form
              className="row g-3 m-4 border border-3 p-4"
              onSubmit={handleSubmit}
            >
              <div className="col-12">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  required
                  onChange={handleInput}
                  value={user.username}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleInput}
                  value={user.email}
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
                  value={user.password}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
