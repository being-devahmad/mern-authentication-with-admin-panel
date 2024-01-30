import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Registration Form</h1>
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
