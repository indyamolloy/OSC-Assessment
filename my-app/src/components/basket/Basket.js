import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import "./basket.css";

function Basket({
  basket,
  handleClick,
  modal,
  handleAdd,
  handleDecrementQty,
  handleRemove,
}) {
  // const [quantity, setQuantity] = useState(1);

  // function decrement() {
  //   setQuantity(quantity - 1);
  // }

  // function increment() {
  //   setQuantity(quantity + 1);
  // }

  return (
    <div>
      <FontAwesomeIcon
        className="basketIcon"
        icon={faBasketShopping}
        onClick={handleClick}
      />
      {modal && (
        <div className="modalBackground">
          <div className="modal">
            <h1>Basket Items:</h1>
            <div>
              {basket.map((item) => {
                return (
                  <div>
                    <div className="itemContainer">
                      <img className="itemImage" src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>£{item.price * item.quantity}</p>
                      <div className="quantityCounter">
                        <button
                          onClick={() => handleDecrementQty(item.id)}
                          disabled={item.quantity <= 1 ? true : false}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => handleAdd(item.id)}>+</button>
                      </div>
                      <button onClick={() => handleRemove(item.id)}>
                        remove
                      </button>
                    </div>
                    <div>
                      <h3>Subtotal: </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
