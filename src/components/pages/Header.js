import React from "react";
import { CgUser } from "react-icons/cg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="search">
        <div>
          <CgUser />
        </div>
        <div>
          <p>username@resoluteai.in</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
