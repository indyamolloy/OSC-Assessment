import React from "react";
import ItemsList from "../../components/itemsList/ItemsList.js";
import "./home.css";

function Home({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / FEATURED ITEMS</h5>
      <ItemsList items={items} category="rating" handleAdd={handleAdd} />
    </div>
  );
}

export default Home;
