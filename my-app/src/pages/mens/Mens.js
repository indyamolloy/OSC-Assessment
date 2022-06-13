import React from "react";
import ItemList from "../../components/itemsList/ItemsList";

function Mens({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / MENS</h5>
      <ItemList items={items} category="mens" handleAdd={handleAdd} />
    </div>
  );
}

export default Mens;
