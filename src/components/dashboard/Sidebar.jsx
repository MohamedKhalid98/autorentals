import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <ul className="list-unstyled">
        <li>
          <NavLink to="/dashboard/cars">Available cars</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/customers">Customers</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
