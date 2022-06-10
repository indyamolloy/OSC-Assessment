import React from "react";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";
import Navbar from "../../components/navbar/Navbar";
import FeaturedItems from "../../components/itemsList/itemsList";

function Electronics({ items }) {
  return (
    <div>
      <SearchNavbar />
      <Navbar items={items} />
      <h1>Jewelery</h1>
      <FeaturedItems items={items} category="electronics" />
    </div>
  );
}
export default Electronics;
