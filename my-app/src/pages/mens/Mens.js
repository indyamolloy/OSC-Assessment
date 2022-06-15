import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList.js";

function Mens({ items, handleAdd, handleAddToWishlist, wishlist }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / MENS</h5>
      <ItemsList
        items={items}
        category="mens"
        handleAdd={handleAdd}
        handleAddToWishlist={handleAddToWishlist}
        wishlist={wishlist}
      />
    </div>
  );
}

export default Mens;
