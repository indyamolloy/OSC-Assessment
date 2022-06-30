import React from "react";
import "./wishlist.css";

function Wishlist({ wishlist, handleAdd, handleRemove }) {
  return (
    <div className="wishlistContainer">
      <h1 className="wishlistHeading">My Wishlist</h1>

      <div className="wishlistItems">
        {wishlist.map((item) => {
          const roundedTotal = item.price.toFixed(2);
          return (
            <div key={item.id} className="wishlistItem">
              <div>
                <img
                  className="itemImage wishlistImg"
                  src={item.image}
                  alt=""
                />
                <div className="itemDetails">
                  <p className="itemName wishlistName">
                    {item.name.length < 35
                      ? item.name
                      : item.name.substring(0, 45) + "..."}
                  </p>
                  <p className="wishlistItemPrice">£{roundedTotal}</p>
                  <div className="wishlistBtnContainer">
                    <button
                      className="addBtn wishlist"
                      onClick={() =>
                        handleAdd(item.id, item.image, item.title, item.price)
                      }
                    >
                      ADD TO CART
                    </button>
                    <button
                      className="removeBtn wishlist"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
