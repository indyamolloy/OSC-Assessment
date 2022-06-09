import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems">
          <a className="navLink">Womens</a>
          <a className="navLink">Mens</a>
          <a className="navLink">Jewelery</a>
          <a className="navLink">Electronics</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
