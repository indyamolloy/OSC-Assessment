import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList.js";

function Womens({ items, handleAdd, handleAddToWishlist, wishlist }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / WOMENS</h5>
      <ItemsList
        items={items}
        category="womens"
        handleAdd={handleAdd}
        handleAddToWishlist={handleAddToWishlist}
        wishlist={wishlist}
      />
    </div>
  );
}

export default Womens;
