import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Contact Form</h1>
            <form className="row g-3 m-4 border border-3 p-4">
              <div className="col">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  aria-label="First name"
                  required
                />
              </div>
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
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  style={{ height: "100px" }}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
