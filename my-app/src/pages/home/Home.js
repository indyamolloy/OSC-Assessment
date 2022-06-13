import React, { useEffect, useState } from "react";
import ItemList from "../../components/itemsList/ItemsList";
import "./home.css";

function Home({ items, handleAdd, breadcrumb }) {
  // const [basket, setBasket] = useState([]);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setItems(data);
  //   };
  //   fetchData();
  // });

  return (
    <div>
      <h5 className="breadcrumbs">HOME / FEATURED ITEMS</h5>
      <ItemList items={items} category="rating" handleAdd={handleAdd} />
    </div>
  );
}

export default Home;
