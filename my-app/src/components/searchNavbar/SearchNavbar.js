import React from "react";
import "./searchNavbar.css";

function searchNavbar() {
  return (
    <div className="searchNavbar">
      <div className="navSearchbarContainer">
        <h1 className="logo">OSC Store</h1>
        <input
          className="searchInput"
          placeholder="Search items &  categories"
        ></input>
        <h4>Basket</h4>
      </div>
    </div>
  );
}

export default searchNavbar;
