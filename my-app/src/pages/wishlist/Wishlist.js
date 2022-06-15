import React from "react";
import "./wishlist.css";

function Wishlist({ wishlist, handleRemove }) {
  return (
    <div className="wishlistContainer">
      <h1>My Wishlist</h1>

      <div className="wishlistItems">
        <div>
          {wishlist.map((item) => {
            const roundedTotal = item.price.toFixed(2);
            return (
              <div key={item.id}>
                <div className="basketItemContainer">
                  <img className="itemImage" src={item.image} alt="" />
                  <div className="itemDetails">
                    <p className="itemName">{item.name}</p>
                    <p className="itemPrice">£{roundedTotal}</p>
                    <button
                      className="removeBtn "
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
