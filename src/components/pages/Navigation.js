import React from "react";
import { BsPeople } from "react-icons/bs";
import { RiListCheck2, RiLogoutBoxRLine } from "react-icons/ri";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-items active">
          <div>
            <BsPeople />
          </div>
          <div>
            <Link to="/add-student" className="link">
              <p>Add Student</p>
            </Link>
          </div>
        </div>
        <div className="nav-items">
          <div>
            <RiListCheck2 />
          </div>

          <div>
            <Link to="/manage-student" className="link">
              {" "}
              <p>Manage Students</p>
            </Link>
          </div>
        </div>
        <div className="nav-items">
          <div>
            <RiLogoutBoxRLine />
          </div>
          <div>
            <p>Logout</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
