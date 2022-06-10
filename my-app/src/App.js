import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Womens from "./pages/womens/Womens";
import Mens from "./pages/mens/Mens";
import Jewelery from "./pages/jewelery/Jewelery";
import Electronics from "./pages/electronics/Electronics";
import FeaturedItems from "./components/itemsList/itemsList";

function App() {
  const [items, setItems] = useState([]);

  //fetching data from api and setting state to object
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/womens" element={<Womens items={items} />} />
        <Route path="/mens" element={<Mens items={items} />} />
        <Route path="/jewelery" element={<Jewelery items={items} />} />
        <Route path="/electronics" element={<Electronics items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
