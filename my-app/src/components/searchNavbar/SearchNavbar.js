import React from "react";
import "./searchNavbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
  handleCloseModal,
  wishlist,
}) {
  //find total num items in wishlist to display
  // const totalWishlistQuantity = wishlist.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );
  return (
    <div className="searchNavbar">
      <div className="navSearchbarContainer">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <input
          className="searchInput"
          placeholder="Search items & categories"
          onChange={handleChange}
          value={value}
        ></input>
        <button className="searchBtn" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <div className="iconsContainer">
          <Link to="/wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </Link>
          <Basket
            basket={basket}
            handleClick={handleClick}
            modal={modal}
            handleAdd={handleAdd}
            handleDecrementQty={handleDecrementQty}
            handleRemove={handleRemove}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
}

export default searchNavbar;
