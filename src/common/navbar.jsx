import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ onSearchChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-theme">
      <Link className="navbar-brand" to="/">
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
