import React from "react";
import "./searchNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import Basket from "../basket/Basket";

function searchNavbar({
  basket,
  handleClick,
  modal,
  handleAdd,
  handleDecrementQty,
  handleRemove,
  handleChange,
  handleSearch,
  value,
}) {
  return (
    <div className="searchNavbar">
      <div className="navSearchbarContainer">
        <h1 className="logo">OSC Store</h1>
        <input
          className="searchInput"
          placeholder="Search items &  categories"
          onChange={handleChange}
          value={value}
        ></input>
        <button className="searchBtn" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <div className="iconsContainer">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <Basket
            basket={basket}
            handleClick={handleClick}
            modal={modal}
            handleAdd={handleAdd}
            handleDecrementQty={handleDecrementQty}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default searchNavbar;
