import React from "react";
import "./header.css";
import logo from "../../images/Untitled-2.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
