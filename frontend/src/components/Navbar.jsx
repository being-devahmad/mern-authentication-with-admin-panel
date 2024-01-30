import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <Link
            class="navbar-brand text-white text-decoration-none fw-bold fs-3 px-3"
            to="/"
          >
            myApp
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item me-2">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item me-2">
                <NavLink className="nav-link text-white" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item me-2">
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item me-2">
                <NavLink className="nav-link text-white" to="/login">
                  Login/Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
