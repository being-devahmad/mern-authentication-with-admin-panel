import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col">
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
          <div className="col-lg-6 col-12">
            <section className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29795.3788499957!2d71.44644114519116!3d30.198603596287033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1706616433847!5m2!1sen!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "64vh" }}
              ></iframe>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
