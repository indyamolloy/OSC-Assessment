import React from "react";
import ItemList from "../../components/ItemsList/ItemsList";

function Electronics({ items, handleAdd }) {
  return (
    <div>
      <h5 className="breadcrumbs">HOME / ELECTRONICS</h5>
      <ItemList items={items} category="electronics" handleAdd={handleAdd} />
    </div>
  );
}
export default Electronics;
