import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchNavbar from "../../components/searchNavbar/SearchNavbar";

function Home() {
  return (
    <div>
      <SearchNavbar />
      <Navbar />
    </div>
  );
}

export default Home;
