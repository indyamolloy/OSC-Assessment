import React from "react";
import ItemsList from "../../components/ItemsList/ItemsList.js";
import "./home.css";

function Home({ items, handleAdd, handleAddToWishlist, wishlist }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / FEATURED ITEMS</h5>
      <ItemsList
        items={items}
        category="rating"
        handleAdd={handleAdd}
        handleAddToWishlist={handleAddToWishlist}
        wishlist={wishlist}
      />
    </div>
  );
}

export default Home;
