import React from "react";
import ItemList from "../../components/ItemsList/ItemsList";

function HomeProducts({ items, handleAdd, handleAddToWishlist, wishlist }) {
  return (
    <div>
      <h5 className="breadcrumbs">PRODUCTS / HOME</h5>
      <ItemList
        items={items}
        category="homeProducts"
        handleAdd={handleAdd}
        handleAddToWishlist={handleAddToWishlist}
        wishlist={wishlist}
      />
    </div>
  );
}
export default HomeProducts;
