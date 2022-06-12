import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Womens from "./pages/womens/Womens";
import Mens from "./pages/mens/Mens";
import Jewelery from "./pages/jewelery/Jewelery";
import Electronics from "./pages/electronics/Electronics";
import ItemList from "./components/itemsList/ItemsList";
import Navbar from "./components/navbar/Navbar";
import SearchNavbar from "./components/searchNavbar/SearchNavbar";

function App() {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);

  //fetching data from api and setting state to object
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  function handleAdd(id, image, name, price) {
    const inBasket = basket.some((item) => item.id === id);
    if (!inBasket) {
      setBasket([
        ...basket,
        { id: id, image: image, name: name, price: price, quantity: 1 },
      ]);
    } else {
      const duplicateItem = basket.find((item) => item.id === id);
      console.log(basket.indexOf(duplicateItem));
      const index = basket.indexOf(duplicateItem);
      setBasket([
        ...basket.slice(0, index),
        {
          ...duplicateItem,
          quantity: duplicateItem.quantity + 1,
        },
        ...basket.slice(index + 1),
      ]);
    }
  }

  function handleDecrementQty(id) {
    const clickedItem = basket.find((item) => item.id === id);
    const index = basket.indexOf(clickedItem);
    setBasket([
      ...basket.slice(0, index),
      {
        ...clickedItem,
        quantity: clickedItem.quantity - 1,
      },
      ...basket.slice(index + 1),
    ]);
  }

  function handleRemove(id) {
    const clickedItem = basket.find((item) => item.id === id);
    const index = basket.indexOf(clickedItem);
    setBasket([...basket.slice(0, index), ...basket.slice(index + 1)]);
  }

  function handleClick() {
    setModal(!modal);
  }

  return (
    <BrowserRouter>
      <SearchNavbar
        basket={basket}
        handleClick={handleClick}
        modal={modal}
        handleAdd={handleAdd}
        handleDecrementQty={handleDecrementQty}
        handleRemove={handleRemove}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/womens"
          element={<Womens items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/mens"
          element={<Mens items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/jewelery"
          element={<Jewelery items={items} handleAdd={handleAdd} />}
        />
        <Route
          path="/electronics"
          element={<Electronics items={items} handleAdd={handleAdd} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
