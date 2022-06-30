import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList.js";

function Accessories({ items, handleAdd, handleAddToWishlist, wishlist }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / ACCESSORIES</h5>
      <ItemsList
        items={items}
        category="accessories"
        handleAdd={handleAdd}
        handleAddToWishlist={handleAddToWishlist}
        wishlist={wishlist}
      />
    </div>
  );
}

export default Accessories;
