import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import FeaturedItems from "../../components/itemsList/itemsList";

function Womens({ items }) {
  return (
    <div>
      <SearchNavbar />
      <Navbar items={items} />
      <h1>Women's Clothing</h1>
      <FeaturedItems items={items} category="womens" />
    </div>
  );
}

export default Womens;
