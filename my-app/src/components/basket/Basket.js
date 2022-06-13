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
  // const [quantity, setQuantity] = useState(1);

  // function decrement() {
  //   setQuantity(quantity - 1);
  // }

  // function increment() {
  //   setQuantity(quantity + 1);
  // }
  const totalPrice = basket.reduce(
    (total, item) => item.price * item.quantity,
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
        <span className="basketNumber">{basket.length}</span>
      </div>
      {modal && (
        <div className="modalBackground">
          <div className="modal">
            <FontAwesomeIcon
              className="closeModalBtn"
              icon={faXmark}
              onClick={handleCloseModal}
            />

            <h2 className="basketTitle">Shopping Bag</h2>
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
                    <h3>Subtotal: £{totalPrice.toFixed(2)}</h3>
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
