import React from "react";
import "./searchNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function searchNavbar() {
  return (
    <div className="searchNavbar">
      <div className="navSearchbarContainer">
        <h1 className="logo">OSC Store</h1>
        <input
          className="searchInput"
          placeholder="Search items &  categories"
        ></input>
        <FontAwesomeIcon icon={faBasketShopping} />
      </div>
    </div>
  );
}

export default searchNavbar;
