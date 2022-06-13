import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import ItemList from "../../components/itemsList/ItemsList";

function Womens({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / WOMENS</h5>
      <ItemList items={items} category="womens" handleAdd={handleAdd} />
    </div>
  );
}

export default Womens;
