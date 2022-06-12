import React from "react";
import "./searchNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Basket from "../basket/Basket";

function searchNavbar({ basket, handleClick, modal }) {
  return (
    <div className="searchNavbar">
      <div className="navSearchbarContainer">
        <h1 className="logo">OSC Store</h1>
        <input
          className="searchInput"
          placeholder="Search items &  categories"
        ></input>
        <Basket basket={basket} handleClick={handleClick} modal={modal} />
      </div>
    </div>
  );
}

export default searchNavbar;
