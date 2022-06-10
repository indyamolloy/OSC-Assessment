import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import FeaturedItems from "../../components/itemsList/itemsList";

function Mens({ items }) {
  return (
    <div>
      <SearchNavbar />
      <Navbar items={items} />
      <h1>Mens's Clothing</h1>
      <FeaturedItems items={items} category="mens" />
    </div>
  );
}

export default Mens;
