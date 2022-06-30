import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems">
          <Link className="navLink" to="/womens">
            Womens
          </Link>
          <Link className="navLink" to="/mens">
            Mens
          </Link>
          <Link className="navLink" to="/accessories">
            Accessories
          </Link>
          <Link className="navLink" to="/homeProducts">
            Home Items
          </Link>
          <Link className="navLink featured" to="/">
            Featured Items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
