import React from "react";
import ItemList from "../../components/itemsList/ItemsList";
import "./home.css";

function Home({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / FEATURED ITEMS</h5>
      <ItemList items={items} category="rating" handleAdd={handleAdd} />
    </div>
  );
}

export default Home;
