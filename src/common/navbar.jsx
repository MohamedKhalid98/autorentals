import React from "react";
import { NavLink, Link } from "react-router-dom";
import authService from "../services/auth.service";
import "./Navbar.scss";
const Navbar = ({ onSearchChange }) => {
  const currentUser = authService.getCurrentUser();
  console.log("==>>>>", currentUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-theme align-items-stretch py-0">
      <Link className="navbar-brand px-3 py-2" to="/">
        <h2>
          Rentals
          <span className="ml-2" role="img">
            🚘
          </span>
        </h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <form className="form-inline my-2 my-lg-0 ml-4 col-7">
          <input
            className="form-control mr-sm-2 rounded bg-white text-theme w-100 border-0"
            type="search"
            placeholder="Search for car"
            aria-label="Search"
            onChange={onSearchChange}
          />
        </form> */}
        <ul className="navbar-nav ml-auto h-100 align-items-stretch">
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li> */}
          {currentUser &&
            currentUser.isAdmin &&
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>}

          {!currentUser ? (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Sign up
                </NavLink>
              </li>
            </React.Fragment>
          ) : (
              <li className="nav-item">
                <div className="dropdown h-100">
                  <button
                    className="btn btn-theme dropdown-toggle d-block h-100"
                    type="button"
                    id="profileDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {currentUser.name}
                  </button>
                  <div
                    className="dropdown-menu border-0 bg-theme text-theme"
                    aria-labelledby="profileDropdown">
                    <button
                      className="dropdown-item"
                      onClick={authService.logout}>
                      Logout <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </li>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
