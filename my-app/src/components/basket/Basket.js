import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./basket.css";

function Basket({
  basket,
  handleClick,
  modal,
  handleAdd,
  handleDecrementQty,
  handleRemove,
  handleCloseModal,
}) {
  //calc price of item based on quantity
  const totalPrice = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = basket.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <div className="basketIconContainer">
        <FontAwesomeIcon
          className="basketIcon"
          icon={faBasketShopping}
          onClick={handleClick}
        />
        <span className="basketNumber">{totalQuantity}</span>
      </div>
      {modal && (
        <div className="modalBackground">
          <div className="modal">
            <FontAwesomeIcon
              className="closeModalBtn"
              icon={faXmark}
              onClick={handleCloseModal}
            />

            <h2 className="basketTitle">
              Shopping Bag{" "}
              {totalQuantity > 0 && (
                <span className="itemsInBag">
                  {totalQuantity > 1
                    ? totalQuantity + " items"
                    : totalQuantity + " item"}
                </span>
              )}
            </h2>
            <div>
              {basket.map((item) => {
                const totalPrice = item.price * item.quantity;
                const roundedTotal = totalPrice.toFixed(2);
                return (
                  <div>
                    <div className="basketItemContainer">
                      <img className="itemImage" src={item.image} alt="" />
                      <div className="itemDetails">
                        <p className="itemName">{item.name}</p>
                        <p className="itemPrice">£{roundedTotal}</p>
                      </div>
                    </div>
                    <div className="quantityCounter">
                      <button
                        className="basketQtyBtn"
                        onClick={() => handleDecrementQty(item.id)}
                        disabled={item.quantity <= 1 ? true : false}
                      >
                        -
                      </button>
                      <p className="qtyNumber">{item.quantity}</p>
                      <button
                        className="basketQtyBtn"
                        onClick={() => handleAdd(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="removeBtn "
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                  </div>
                );
              })}
              <div>
                <hr className="hr" />
                {basket.length >= 1 ? (
                  <div>
                    <h3 className="subtotal">
                      Subtotal: £{totalPrice.toFixed(2)}
                    </h3>
                    <div className="checkoutContainer">
                      <button className="addBtn basketCheckoutBtn">
                        CHECKOUT NOW
                      </button>
                    </div>
                  </div>
                ) : (
                  <h3 className="emptyCart">Your shopping cart is empty</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
