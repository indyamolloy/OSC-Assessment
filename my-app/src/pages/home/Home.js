import React, { useEffect, useState } from "react";
import FeaturedItems from "../../components/itemsList/itemsList";
import Navbar from "../../components/navbar/Navbar";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";

function Home({ items }) {
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
      <SearchNavbar />
      <Navbar items={items} />
      <h1>Featured Items</h1>
      <FeaturedItems items={items} category="rating" />
    </div>
  );
}

export default Home;
