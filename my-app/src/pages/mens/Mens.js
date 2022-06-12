import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import ItemList from "../../components/itemsList/ItemsList";

function Mens({ items, handleAdd }) {
  return (
    <div>
      <h1>Men's Clothing</h1>
      <ItemList items={items} category="mens" handleAdd={handleAdd} />
    </div>
  );
}

export default Mens;
