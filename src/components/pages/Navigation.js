import React from "react";
import { BsPeople } from "react-icons/bs";
import { RiListCheck2, RiLogoutBoxRLine } from "react-icons/ri";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-items">
          <div>
            <BsPeople />
          </div>
          <div>
            <NavLink
              exact
              to="/"
              className="link"
              style={(isActive) => ({
                backgroundColor: isActive ? "active" : null,
              })}
            >
              <p>Add Student</p>
            </NavLink>
          </div>
        </div>
        <div className="nav-items">
          <div>
            <RiListCheck2 />
          </div>

          <div>
            <NavLink
              to="/manage-student"
              className="link"
              style={(isActive) => ({
                backgroundColor: isActive ? "active" : null,
              })}
            >
              {" "}
              <p>Manage Students</p>
            </NavLink>
          </div>
        </div>
        <div className="nav-items">
          <div>
            <RiLogoutBoxRLine />
          </div>
          <div>
            <NavLink
              to="/logout"
              className="link"
              style={(isActive) => ({
                backgroundColor: isActive ? "active" : null,
              })}
            >
              <p>Logout</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
