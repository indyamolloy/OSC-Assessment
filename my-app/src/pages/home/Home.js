import React, { useEffect, useState } from "react";
import AllItems from "../../components/allItems/AllItems";
import Navbar from "../../components/navbar/Navbar";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  });

  return (
    <div>
      <SearchNavbar />
      <Navbar />
      <AllItems items={items} />
    </div>
  );
}

export default Home;
