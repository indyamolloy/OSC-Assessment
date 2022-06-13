import React from "react";
import ItemsList from "../../components/itemsList/ItemsList.js";

function Mens({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / MENS</h5>
      <ItemsList items={items} category="mens" handleAdd={handleAdd} />
    </div>
  );
}

export default Mens;
