import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex align-items-center mt-5">
            <div>
              <h1 className="display-5 fw-bold">
                Fueling Skills, Igniting Careers
              </h1>
              <p className="fs-5">
                Master industry-relevant skills with our vernacular online
                courses. Choose your program, get certified, and open doors to
                lucrative career opportunities.
              </p>
              <button type="button" class="btn btn-lg btn-primary px-5">
                Explore
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center mt-5">
            <div>
              <img
                src="https://www.wscubetech.com/images/banner-right-img.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
