import React, { useEffect, useState } from "react";
import ItemList from "../../components/itemsList/ItemsList";
import Navbar from "../../components/navbar/Navbar";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";

function Home({ items, handleAdd, breadcrumb }) {
  const [basket, setBasket] = useState([]);
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
      <h1>Featured Items</h1>
      <ItemList items={items} category="rating" handleAdd={handleAdd} />
    </div>
  );
}

export default Home;
