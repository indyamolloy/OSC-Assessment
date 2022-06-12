import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import ItemList from "../../components/itemsList/ItemsList";

function Electronics({ items, handleAdd }) {
  return (
    <div>
      <h1>Electronics</h1>
      <ItemList items={items} category="electronics" handleAdd={handleAdd} />
    </div>
  );
}
export default Electronics;
