import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import "./basket.css";

function Basket() {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(!modal);
  }

  return (
    <div>
      <FontAwesomeIcon
        className="basketIcon"
        icon={faBasketShopping}
        onClick={handleClick}
      />
      {modal && <div className="modal">Basket Items:</div>}
    </div>
  );
}

export default Basket;
